import { NewsProps } from './news.types';
import * as React from 'react';


export class News extends React.PureComponent<NewsProps> {
    public componentDidUpdate() {
        console.log('NEWS COMPONENT RENDER');
    }

    public render() {
        return (
            <div>LOL-CHECK-CHEBURECK</div>
        );
    }
}