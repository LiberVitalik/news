export interface ModalProps {
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