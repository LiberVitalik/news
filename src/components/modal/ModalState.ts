export interface ModalState {
    isVisible?: boolean;
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
    isLoginIn?: boolean;
    isLoginUp?: boolean;
}