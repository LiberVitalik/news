import * as React from 'react';
import { User } from '../user/user';
import { HeaderWrapper, Logo } from './header.style';

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