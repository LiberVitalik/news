import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { SyntheticEvent } from 'react';
import { Button } from '../../theme/commot-style/common-style';
import { Modal } from '../modal/modal';
import { IconWrapper, UserWrapper } from './user.style';
import { FormType, UserState } from './user.types';

library.add(faUser);
library.add(faUserPlus);

export class User extends React.Component<{}, UserState> {
    public state = {
        isModalShow: false
    };

    private modalName: string;

    public render(): React.ReactNode {

        const { isModalShow } = this.state;
        
        return (
            <>
                <UserWrapper>
                    <Button onClick={this.openModal(FormType.signIn)}>
                        <IconWrapper icon="user" />
                        Sign In
                    </Button>
                    <Button onClick={this.openModal(FormType.signUp)}>
                        <IconWrapper icon="user-plus" />
                        Sign Up
                    </Button>
                </UserWrapper>
                {isModalShow &&  <Modal formName={this.modalName} modalClose={this.modalCloseHandler} />}
            </>
        );
    }

    private openModal = (formName: string) => (): void => {
        this.modalName = formName;

        this.setState({
            isModalShow: true
        });
    };

    private modalCloseHandler = (event: SyntheticEvent): void => {
        event.preventDefault();
        this.setState({
            isModalShow: false
        });
        console.log('USER MODAL CLOSE');
    };
}