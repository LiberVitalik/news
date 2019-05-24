import * as React from 'react';

export class Content extends React.Component {

    public render() {
        const { children } = this.props;

        return (
            <div>{children}</div>
        );
    }
}