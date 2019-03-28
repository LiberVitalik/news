import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Button } from '../../theme/commot-style/common-style';
import { FormField } from '../formField/form-field';
import { FormType } from '../user/user.types';
import { ButtonClose, IconWrapper, ModalContent, ModalWrapper } from './modal.style';
import { ModalProps, ModalState } from './modal.types';

library.add(faTimes);

export class Modal extends React.Component<ModalProps, ModalState> {

    public state: ModalState = {
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

        const { modalClose } = this.props;

        return (
            <>
                <ModalWrapper>
                    <ModalContent action="GET">
                        <ButtonClose onClick={modalClose}>
                            <IconWrapper icon="times" />
                        </ButtonClose>
                        <fieldset>
                            <legend>News api form</legend>
                            {this.props.formName === FormType.signIn && (
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
                            {this.props.formName === FormType.signUp && (
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
        this.setState({
            signIn: {
                [name]: value
            },
            signUp: {
                [name]: value
            }
        } as ModalState);
    };
}