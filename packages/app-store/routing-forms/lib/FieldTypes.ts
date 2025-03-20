export const enum RoutingFormFieldType {
  TEXT = "text",
  NUMBER = "number",
  TEXTAREA = "textarea",
  SINGLE_SELECT = "select",
  MULTI_SELECT = "multiselect",
  PHONE = "phone",
  EMAIL = "email",
  ADDRESS = "address",
  MULTIEMAIL = "multiemail",
  RADIO_INPUT = "radioInput",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  BOOLEAN = "boolean",
  URL = "url",
  NAME = "name",
}

export const isValidRoutingFormFieldType = (type: string): type is RoutingFormFieldType => {
  return [
    RoutingFormFieldType.TEXT,
    RoutingFormFieldType.NUMBER,
    RoutingFormFieldType.TEXTAREA,
    RoutingFormFieldType.SINGLE_SELECT,
    RoutingFormFieldType.MULTI_SELECT,
    RoutingFormFieldType.PHONE,
    RoutingFormFieldType.EMAIL,
    RoutingFormFieldType.ADDRESS,
    RoutingFormFieldType.MULTIEMAIL,
    RoutingFormFieldType.RADIO_INPUT,
    RoutingFormFieldType.CHECKBOX,
    RoutingFormFieldType.RADIO,
    RoutingFormFieldType.BOOLEAN,
    RoutingFormFieldType.URL,
    RoutingFormFieldType.NAME,
  ].includes(type as RoutingFormFieldType);
};

export const FieldTypes = [
  {
    label: "Short Text",
    value: RoutingFormFieldType.TEXT,
  },
  {
    label: "Number",
    value: RoutingFormFieldType.NUMBER,
  },
  {
    label: "Long Text",
    value: RoutingFormFieldType.TEXTAREA,
  },
  {
    label: "Single Selection",
    value: RoutingFormFieldType.SINGLE_SELECT,
  },
  {
    label: "Multiple Selection",
    value: RoutingFormFieldType.MULTI_SELECT,
  },
  {
    label: "Phone",
    value: RoutingFormFieldType.PHONE,
  },
  {
    label: "Email",
    value: RoutingFormFieldType.EMAIL,
  },
  {
    label: "Address",
    value: RoutingFormFieldType.ADDRESS,
  },
  {
    label: "Multiple Emails",
    value: RoutingFormFieldType.MULTIEMAIL,
  },
  {
    label: "Radio Input",
    value: RoutingFormFieldType.RADIO_INPUT,
  },
  {
    label: "Checkbox Group",
    value: RoutingFormFieldType.CHECKBOX,
  },
  {
    label: "Radio Group",
    value: RoutingFormFieldType.RADIO,
  },
  {
    label: "Checkbox",
    value: RoutingFormFieldType.BOOLEAN,
  },
  {
    label: "URL",
    value: RoutingFormFieldType.URL,
  },
  {
    label: "Name",
    value: RoutingFormFieldType.NAME,
  },
] as const;
