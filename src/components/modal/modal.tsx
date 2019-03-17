import * as React from 'react';
import { Button } from '../../theme/button/Button';
import { FormField } from '../formField/form-field';
import { ModalContent, ModalWrapper } from './modal.style';
import { ModalProps } from './modal.types';

export class Modal extends React.Component<{}, ModalProps> {

    public state: ModalProps = {
        isSignIn: false,
        isSignUp: true,
        signIn: {
            activePassword: '',
            login: ''
        },
        signUp: {
            email: '',
            firstName: '',
            lastName: '',
            regPassword: ''
        }
    };

    public render(): React.ReactNode {
        return (
            <>
                <ModalWrapper>
                    <ModalContent action="GET">
                        <fieldset>
                            <legend>News api form</legend>
                            {this.state.isSignIn && (
                                <>
                                    <FormField type="text"
                                               name={'login'}
                                               onChange={this.inputHandler}
                                               value={this.state.signIn.login}
                                               title={'Login'}
                                               required />
                                    <FormField type="password"
                                               name={'activePassword'}
                                               onChange={this.inputHandler}
                                               title={'Password'}
                                               value={this.state.signIn.activePassword}
                                               required />
                                </>
                            )}
                            {this.state.isSignUp && (
                                <>
                                    <FormField type="text"
                                               name={'firstName'}
                                               onChange={this.inputHandler}
                                               title={'First name'}
                                               value={this.state.signUp.firstName}
                                               required />
                                    <FormField type="text"
                                               name={'lastName'}
                                               onChange={this.inputHandler}
                                               title={'Last Name'}
                                               value={this.state.signUp.lastName}
                                               required />
                                    <FormField type="email"
                                               name={'email'}
                                               onChange={this.inputHandler}
                                               title={'Email'}
                                               value={this.state.signUp.email}
                                               required />
                                    <FormField type="password"
                                               name={'regPassword'}
                                               onChange={this.inputHandler}
                                               title={'Password'}
                                               value={this.state.signUp.regPassword}
                                               required />
                                </>
                            )}
                            <Button circle>OK</Button>
                        </fieldset>
                    </ModalContent>
                </ModalWrapper>
            </>
        );
    }

    private inputHandler = (value: string): void => {
        if (this.state.isSignIn) {
            this.setState({
                signIn: {
                    [name]: value
                }
            } as ModalProps);
        }
        if (this.state.isSignUp) {
            this.setState({
                signUp: {
                    [name]: value
                }
            } as ModalProps);
        }
    };
}