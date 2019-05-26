import * as React from 'react';
import { NewsEnum } from '../../services/news.enum';
import { MenuItem, MenuList, MenuNav } from './menu.style';
import { MenuProps } from './menu.types';

export class Menu extends React.Component<MenuProps> {

    public render() {
        return (
            <MenuNav>
                <MenuList>
                    {Object.keys(NewsEnum).map((item: keyof typeof NewsEnum, index: number) => {
                        return (
                            <MenuItem key={index} onClick={this.selectNews(item)}>
                                {NewsEnum[item].replace('-', ' ').toUpperCase()}
                            </MenuItem>
                        );
                    })}
                    <MenuItem />
                </MenuList>
            </MenuNav>
        );
    }

    private selectNews = (news: keyof typeof NewsEnum) => (): void => {
        const { newsHandler } = this.props;
        newsHandler(news);
    }
}