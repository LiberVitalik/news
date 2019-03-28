import { SyntheticEvent } from 'react';

export interface ModalState {
    signIn?: {
        login: string,
        activePassword: string
    };
    signUp?: {
        firstName: string,
        lastName: string,
        email: string,
        regPassword: string
    };
    isSignIn?: boolean;
    isSignUp?: boolean;
    formType?: string;
}

export interface ModalProps {
    formName: string;
    modalClose(event: SyntheticEvent): void;
}