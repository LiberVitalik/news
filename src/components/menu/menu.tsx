import * as React from 'react';
import { NewsEnum } from '../../services/news.enum';
import { MenuItem, MenuList, MenuNav } from './menu.style';
import { MenuTypes } from './menu.types';

export class Menu extends React.Component<MenuTypes> {

    public render() {
        return (
            <MenuNav>
                <MenuList>
                    {Object.keys(NewsEnum).map((item: any, index: number) => {
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

    private selectNews = (news: NewsEnum) => (): void => {
        const { newsHandler } = this.props;
        newsHandler(news);
    }
}