
export interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
}

export interface ContactForm extends HTMLFormElement {
    readonly elements: FormElements;
}