import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Button } from '../../theme/button/Button';
import { Modal } from '../modal/modal';
import { ButtonHandleWrapper, IconWrapper, UserWrapper } from './user.style';
import { FormType, UserState } from './user.types';

library.add(faUser);
library.add(faUserPlus);

export class User extends React.Component<{}, UserState> {
    public state = {
        modalShow: false
    };

    private modalType: string;

    public render(): React.ReactNode {

        const { modalShow } = this.state;
        
        return (
            <>
                <UserWrapper>
                    <ButtonHandleWrapper onClick={this.toggleModal(FormType.signIn)}>
                        <Button>
                            <IconWrapper icon="user" />
                            Sign In
                        </Button>
                    </ButtonHandleWrapper>
                    <ButtonHandleWrapper onClick={this.toggleModal(FormType.signUp)}>
                        <Button>
                            <IconWrapper icon="user-plus" />
                            Sign Up
                        </Button>
                    </ButtonHandleWrapper>
                </UserWrapper>
                {modalShow &&  <Modal />}
            </>
        );
    }

    private toggleModal = (modalName: string) => () => {
        const { modalShow } = this.state;

        this.modalType = modalName;

        console.log(this.modalType);

        this.setState({
            modalShow: !modalShow
        });
    };

    // private modalType = (): string => {};
}