export interface FieldInterface {
  name: string;
  component: "input" | "text" | "checkbox" | "radio";
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  color?: string;
  autoComplete?: string;
}

export default interface StaticFormInterface {
  inputs: FieldInterface[];
}

export class DefaultStaticForm implements FieldInterface {
  name: string;
  component: "input" | "text" | "checkbox" | "radio";
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  color?: string;
  autoComplete?: string;

  constructor() {
    this.name = "";
    this.component = "text";
    this.label = "";
    this.placeholder = "";
    this.required = false;
    this.type = "";
    this.color = "primary";
    this.autoComplete = "";
  }
}
