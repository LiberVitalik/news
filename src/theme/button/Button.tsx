import * as React from 'react';
import { ButtonWrapper } from './style';

export class Button extends React.Component {

    public render(): React.ReactNode {
        return (
            <ButtonWrapper>{this.props.children}</ButtonWrapper>
        );
    }
}