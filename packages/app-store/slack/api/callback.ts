import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@calcom/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  if (code === undefined && typeof code !== "string") {
    res.status(400).json({ message: "`code` must be a string" });
    return;
  }

  if (!req.session?.user?.id) {
    return res.status(401).json({ message: "You must be logged in to do this" });
  }

  const existingUser = await prisma.credential.findFirst({
    where: {
      appId: "slack-test",
      userId: req.session?.user.id,
    },
  });

  if (existingUser) {
    res.status(200).json({ message: "Slack already installed" });
  }

  try {
    const response = await fetch("https://slack.com/api/oauth.v2.access", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,
        code: code as string,
        redirect_uri: `https://7bf4-2405-201-681a-4184-581f-d4c1-45de-615e.ngrok-free.app/api/integrations/slack/callback`,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.error || "Failed to exchange code for token.");
    }

    const { authed_user, access_token } = data;
    const slackUserId = authed_user.id;
    const slackAccessToken = access_token;

    await prisma.credential.create({
      data: {
        type: "slack-test",
        key: { accessToken: slackAccessToken, userId: slackUserId },
        userId: req.session.user.id,
        appId: "slack-test",
      },
    });

    res.status(200).json({ message: "Slack account connected successfully!" });
  } catch (error) {
    console.error("Error during Slack OAuth callback:", error);

    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(500).json({ message: "An unexpected error occurred." });
  }
}
