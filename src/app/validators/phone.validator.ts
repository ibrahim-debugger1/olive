import { AbstractControl, ValidationErrors } from '@angular/forms';

const PHONE_REGEX = /^(?:(?:(?:\+|00)962)|0)?7[789]\d{7}$/;

export function phone(control: AbstractControl): ValidationErrors | null {
  const value = +control.value;

  if (isNaN(value)) {
    return { phone: true };
  }

  if (!PHONE_REGEX.test(`${value}`)) {
    return { phone: true };
  }

  return null;
}
