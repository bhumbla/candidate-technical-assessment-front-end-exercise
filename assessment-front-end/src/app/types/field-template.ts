export interface FieldTemplate {
  type: string,
  ctrlName: string,
  fieldTextType?: string,
  errorIcon?: string,
  label?: string,
  clearBtn?: boolean,
  required?: boolean,
  email?: boolean,
  minLength?: number,
  toggleBtn?: boolean,
  defaultValue?: number | boolean | string,
}
