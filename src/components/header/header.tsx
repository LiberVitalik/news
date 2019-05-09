import { library } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Search } from '../search/search';
import { User } from '../user/user';
import { HeaderWrapper, Logo, LogoIcon } from './header.style';

library.add(faNewspaper);

export class Header extends React.Component {

    public render(): React.ReactNode {
        return (
            <HeaderWrapper>
                <Logo href="#">
                    <LogoIcon icon={'newspaper'} size={'2x'} />
                </Logo>
                <Search />
                <User />
            </HeaderWrapper>
        );
    }
}