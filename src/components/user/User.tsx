import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Button } from '../../theme/button/Button';
import { Modal } from '../modal/Modal';
import { ButtonHandleWrapper, IconWrapper, UserWrapper } from './User.style';
import { UserState } from './User.types';

library.add(faUser);
library.add(faUserPlus);

export class User extends React.Component<{}, UserState> {
    public state = {
        modalShow: false
    };

    public render(): React.ReactNode {

        const { modalShow } = this.state;
        
        return (
            <>
                <UserWrapper>
                    <ButtonHandleWrapper onClick={this.toggleModal}>
                        <Button>
                            <IconWrapper icon="user" />
                            Sign In
                        </Button>
                    </ButtonHandleWrapper>
                    <ButtonHandleWrapper>
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

    private toggleModal = (): void => {
        const { modalShow } = this.state;

        this.setState({
            modalShow: !modalShow
        });
    };
}