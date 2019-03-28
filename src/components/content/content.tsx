import * as React from 'react';
import { NewsEnum } from '../../services/news.enum';
import { getNewsData } from '../../services/news.service';
import { Menu } from '../menu/menu';

export class Content extends React.Component {

    public componentDidMount() {
        getNewsData(NewsEnum.BBC_NEWS);
    }

    public render() {
        return (
            <Menu />
        );
    }
}