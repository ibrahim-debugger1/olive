import { AbstractControl, ValidationErrors } from '@angular/forms';

export function image(fileSize: number): (control: AbstractControl) => ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const maxFileSize = 2097152;

    if (fileSize > maxFileSize) {
      return { maxSizeExceeded: true };
    }

    return null;
  };
}
