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
                                        <label className={this.isLabelActive(this.state.signIn.login)}>
                                            <input type="text"
                                                   name={'login'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signIn.login}
                                                   required
                                            />
                                            <small>Login</small>
                                        </label>
                                        <label className={this.isLabelActive(this.state.signIn.activePassword)}>
                                            <input type="password"
                                                   name={'activePassword'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signIn.activePassword}
                                                   required
                                            />
                                            <small>Password</small>
                                        </label>
                                    </>
                                )}
                                {this.state.isLoginUp && (
                                    <>
                                        <label className={this.isLabelActive(this.state.signUp.firstName)}>
                                            <input type="text"
                                                   name={'firstName'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signUp.firstName}
                                                   required
                                            />
                                            <small>First name</small>
                                        </label>
                                        <label className={this.isLabelActive(this.state.signUp.lastName)}>
                                            <input type="text"
                                                   name={'lastName'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signUp.lastName}
                                                   required
                                            />
                                            <small>Last Name</small>
                                        </label>
                                        <label className={this.isLabelActive(this.state.signUp.email)}>
                                            <input type="email"
                                                   name={'email'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signUp.email}
                                                   required
                                            />
                                            <small>Email</small>
                                        </label>
                                        <label className={this.isLabelActive(this.state.signUp.regPassword)}>
                                            <input type="password"
                                                   name={'regPassword'}
                                                   onChange={this.inputHandler}
                                                   value={this.state.signUp.regPassword}
                                                   required
                                            />
                                            <small>Password</small>
                                        </label>
                                    </>
                                )}
                                <Button circle>OK</Button>
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

    private isLabelActive = (event: string) => {
        return !!event ? 'label-active' : '';
    };
}