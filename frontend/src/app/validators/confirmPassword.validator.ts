import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');

    if (password?.value !== passwordConfirm?.value) {
        return { passwordMismatch: true };
    }

    return null;

};