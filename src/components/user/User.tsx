import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Button } from '../../theme/button/Button';
import { IconWrapper, UserWrapper } from './style';

library.add(faUser);
library.add(faUserPlus);

export class User extends React.Component {

    public render(): React.ReactNode {
        return (
            <UserWrapper>
                <Button>
                    <IconWrapper icon="user" />
                    Sign In
                </Button>
                <Button>
                    <IconWrapper icon="user-plus" />
                    Sign Up
                </Button>
            </UserWrapper>
        );
    }
}