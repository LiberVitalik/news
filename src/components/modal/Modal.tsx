import * as React from 'react';
import { Button } from '../../theme/button/Button';
import { ModalState } from './ModalState';
import { ModalContent, ModalWrapper } from './style';

export class Modal extends React.Component<ModalState> {
    
    public state: ModalState = {
        isLoginIn: false,
        isLoginUp: true,
        isVisible: true,
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
                {this.state.isVisible && (
                    <ModalWrapper>
                        <ModalContent action="GET">
                            <fieldset>
                                <legend>News api form</legend>
                                {this.state.isLoginIn && (
                                    <>
                                        <label className={`${this.state.signIn.login ? 'label-active' : ''}`}>
                                            <input type="text"
                                                   name={'login'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signIn.login}
                                                   required={true}
                                            />
                                            <small>Login</small>
                                        </label>
                                        <label className={`${this.state.signIn.activePassword ? 'label-active' : ''}`}>
                                            <input type="password"
                                                   name={'activePassword'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signIn.activePassword}
                                                   required={true}
                                            />
                                            <small>Password</small>
                                        </label>
                                    </>
                                )}
                                {this.state.isLoginUp && (
                                    <>
                                        <label className={`${this.state.signUp.firstName ? 'label-active' : ''}`}>
                                            <input type="text"
                                                   name={'firstName'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signUp.firstName}
                                                   required={true}
                                            />
                                            <small>First name</small>
                                        </label>
                                        <label className={`${this.state.signUp.lastName ? 'label-active' : ''}`}>
                                            <input type="text"
                                                   name={'lastName'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signUp.lastName}
                                                   required={true}
                                            />
                                            <small>Last Name</small>
                                        </label>
                                        <label className={`${this.state.signUp.email ? 'label-active' : ''}`}>
                                            <input type="email"
                                                   name={'email'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signUp.email}
                                                   required={true}
                                            />
                                            <small>Email</small>
                                        </label>
                                        <label className={`${this.state.signUp.regPassword ? 'label-active' : ''}`}>
                                            <input type="password"
                                                   name={'regPassword'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signUp.regPassword}
                                                   required={true}
                                            />
                                            <small>Password</small>
                                        </label>
                                    </>
                                )}
                                <Button circle={true}>OK</Button>
                            </fieldset>
                        </ModalContent>
                    </ModalWrapper>
                )}
            </>
        );
    }

    private inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        if (this.state.isLoginIn) {
            this.setState({
                signIn: {
                    [event.currentTarget.name]: event.currentTarget.value,
                    [event.currentTarget.name]: event.currentTarget.value
                }
            });
        }
        if (this.state.isLoginUp) {
            this.setState({
                signUp: {
                    [event.currentTarget.name]: event.currentTarget.value,
                    [event.currentTarget.name]: event.currentTarget.value
                }
            });
        }
    };
}