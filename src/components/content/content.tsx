import * as React from 'react';
import { NewsEnum } from '../../services/news.enum';
import { getNewsData } from '../../services/news.service';
import { ContentProps } from './content.types';

export class Content extends React.PureComponent<ContentProps> {

    public componentDidMount(): void {
        if (this.props.newsData) {
            console.log('Content componentDidMount newsData', getNewsData(NewsEnum.BBC_NEWS));
        }
    }

    public render() {
        const { newsData } = this.props;

        return (
            <div>{newsData}</div>
        );
    }
}