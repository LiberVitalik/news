import * as React from 'react';
import { NewsEnum } from '../../services/news.enum';
import { getNewsData } from '../../services/news.service';
import { Content } from '../content/content';
import { Menu } from '../menu/menu';

export class Main extends React.PureComponent {

    public componentDidMount() {
        console.log('Main componentDidMount newsData', getNewsData(NewsEnum.BBC_NEWS));
    }

    // public componentWillMount() {
    //     console.log('Main componentWillMount newsData', getNewsData(NewsEnum.BBC_NEWS));
    // }
    //
    // public componentWillUpdate() {
    //     console.log('Main componentWillUpdate newsData', getNewsData(NewsEnum.BBC_NEWS));
    // }

    public render() {
        return (
            <>
                <Menu />
                <Content newsData={getNewsData(NewsEnum.BBC_NEWS)} />
            </>
        );
    }
}