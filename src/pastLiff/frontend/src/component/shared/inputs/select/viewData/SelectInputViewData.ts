export type selectInputValueType = string | number;

export interface SelectInputListData {
  text: string,
  value: selectInputValueType
}
export type SelectInputListDataType = Array<SelectInputListData>;

export interface SelectInputViewData {
  listData: SelectInputListDataType;
  includeBlank?: boolean;
  value?: selectInputValueType;
  defaultValue?: selectInputValueType;
  innerClassName?: string;
  label?: string;
  placeholder?: string;
  InputLabelProps?: { [key: string]: any };
  InputProps?: { [key: string]: any };
  inputProps?: { [key: string]: any };
  required?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
}
