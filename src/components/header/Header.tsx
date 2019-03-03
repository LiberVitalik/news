import * as React from 'react';
import { User } from '../user/User';
import { HeaderWrapper, Logo } from './style';

export class Header extends React.Component {

    public render(): React.ReactNode {
        return (
            <HeaderWrapper>
                <Logo href="#" />
                <User />
            </HeaderWrapper>
        );
    }
}