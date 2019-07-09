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

        const { modalClose, formName } = this.props;
        const { login, activePassword } = this.state.signIn;
        const { firstName, lastName, email, regPassword } = this.state.signUp;

        return (
            <>
                <ModalWrapper>
                    <ModalContent action="GET">
                        <ButtonClose onClick={modalClose}>
                            <IconWrapper icon="times" />
                        </ButtonClose>
                        <fieldset>
                            <legend>News api form</legend>
                            {formName === FormType.signIn && (
                                <>
                                    <FormField type="text"
                                               name={'login'}
                                               onChange={this.inputHandler}
                                               value={login}
                                               title={'Login'}
                                               required />
                                    <FormField type="password"
                                               name={'activePassword'}
                                               onChange={this.inputHandler}
                                               title={'Password'}
                                               value={activePassword}
                                               required />
                                </>
                            )}
                            {formName === FormType.signUp && (
                                <>
                                    <FormField type="text"
                                               name={'firstName'}
                                               onChange={this.inputHandler}
                                               title={'First name'}
                                               value={firstName}
                                               required />
                                    <FormField type="text"
                                               name={'lastName'}
                                               onChange={this.inputHandler}
                                               title={'Last Name'}
                                               value={lastName}
                                               required />
                                    <FormField type="email"
                                               name={'email'}
                                               onChange={this.inputHandler}
                                               title={'Email'}
                                               value={email}
                                               required />
                                    <FormField type="password"
                                               name={'regPassword'}
                                               onChange={this.inputHandler}
                                               title={'Password'}
                                               value={regPassword}
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

    private inputHandler = (value: string, name: string): void => {
        const { formName } = this.props;

        this.setState({
            [formName]: {
                // @ts-ignore
                ...this.state[formName],
                [name]: value
            }
        } as ModalState);
    };
}