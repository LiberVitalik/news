import * as React from 'react';
import { Button } from '../../theme/button/Button';
import { IconWrapper, UserWrapper } from './style';

export class User extends React.Component {

    public render(): React.ReactNode {
        return (
            <UserWrapper>
                <Button>
                    <IconWrapper icon="user" />
                    Sign in
                </Button>
            </UserWrapper>
        );
    }
}