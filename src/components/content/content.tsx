import * as React from 'react';
import { ContentWrapper } from './content.style';

export class Content extends React.Component {

    public render() {
        const { children } = this.props;

        return (
            <ContentWrapper>{children}</ContentWrapper>
        );
    }
}