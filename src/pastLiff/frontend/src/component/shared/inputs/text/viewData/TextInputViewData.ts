export type textInputValueType = string | number;

export interface TextInputViewData {
  type: "text" | "email" | "password" | "url" | "tel" | "search";
  value?: textInputValueType;
  defaultValue?: textInputValueType;
  innerClassName?: string;
  label?: string;
  placeholder?: string;
  InputLabelProps?: { [key: string]: any };
  InputProps?: { [key: string]: any };
  inputProps?: { [key: string]: any };
  required?: boolean;
  fullWidth?: boolean;
  autoComplete?: string;
  helperText?: string;
  error?: boolean;
}
