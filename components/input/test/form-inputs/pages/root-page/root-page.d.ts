import { FormBuilder } from '@angular/forms';
export declare class RootPage {
    loginForm: any;
    userForm: any;
    login: {
        email: string;
        username: string;
        password: string;
        gender: string;
        comments: string;
    };
    submitted: boolean;
    isTextAreaDisabled: boolean;
    constructor(fb: FormBuilder);
    emailValidator(control: any): {
        invalidEmail: boolean;
    };
    submit(_: UIEvent, value?: any): void;
    disable(): void;
    toggleDisable(): void;
}
