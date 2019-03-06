export interface FormFieldState {
    isLabelActive: boolean;
}

export interface FormFieldProps {
    name: string;
    title: string;
    type: string;
    value: string;
    required?: boolean;
    onChange(event: string): void;
}
