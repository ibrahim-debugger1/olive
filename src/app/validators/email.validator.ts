import { AbstractControl, ValidationErrors } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function email(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!EMAIL_REGEX.test(value)) {
    return { email: true };
  }

  return null;
}
