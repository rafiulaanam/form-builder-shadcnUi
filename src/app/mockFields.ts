import { FormField } from "@/schema"

export const mockFields: FormField[] = [
  {
    id: "username",
    label: "Username",
    placeholder: "username",
    key: "username",
    type: "string",
    defaultValue: "",
    required: true,
    validation: { min: 1, max: 255 },
  },
  {
    id: "mmm",
    label: "Number",
    key: "myNumber",
    type: "number",
    required: true,
    validation: { min: 1, max: 9999 },
  },
  {
    id: "email",
    label: "Email",
    key: "email",
    defaultValue: "",
    type: "string",
    required: true,
    validation: { format: "email", min: 1, max: 255 },
  },
  {
    id: "bool",
    label: "Security emails",
    desc: "Receive emails about your account security.",
    key: "securityEmails",
    defaultValue: false,
    type: "boolean",
    required: true,
  },
  {
    id: "dateee",
    label: "Date of birth",
    placeholder: "Pick a date",
    desc: "Your date of birth is used to calculate your age.",
    key: "dateOfBirth",
    type: "date",
    required: true,
  },
  {
    id: "aeenum",
    label: "Notify me about",
    key: "notify",
    style: "radio",
    enumValues: [
      { id: Date.now().toString(), label: "All new messages", value: "all" },
      {
        id: Date.now().toString(),
        label: "Direct messages and mentions",
        value: "dm",
      },
      { id: Date.now().toString(), label: "Nothing", value: "none" },
    ],
    type: "enum",
    enumName: "languagee",
    required: true,
  },
  {
    id: "enum",
    label: "Language",
    desc: "This is the language that will be used in the dashboard.",
    key: "language",
    style: "combobox",
    enumName: "language",
    enumValues: [
      { id: Date.now().toString(), label: "English", value: "en" },
      { id: Date.now().toString(), label: "Arabic", value: "ar" },
      { id: Date.now().toString(), label: "Kurdish", value: "ku" },
    ],
    type: "enum",
    required: true,
  },
  {
    id: "enummm",
    label: "Language",
    desc: "Select a language",
    placeholder: "Sselect a value",
    key: "languageSelect",
    style: "select",
    enumValues: [
      { id: Date.now().toString(), label: "English", value: "en" },
      { id: Date.now().toString(), label: "Arabic", value: "ar" },
      { id: Date.now().toString(), label: "Kurdish", value: "ku" },
    ],
    enumName: "languageee",
    type: "enum",
    required: true,
  },
]
