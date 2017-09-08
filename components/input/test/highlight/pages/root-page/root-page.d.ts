import { FormBuilder } from '@angular/forms';
export declare class RootPage {
    loginForm: any;
    login: {
        email: string;
        username: string;
        password: string;
        comments: string;
        inset: string;
    };
    submitted: boolean;
    constructor(fb: FormBuilder);
    emailValidator(control: any): {
        invalidEmail: boolean;
    };
    submit(_: UIEvent, value: any): void;
}
