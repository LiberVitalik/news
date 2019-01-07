import * as React from 'react';
import { ButtonProps } from './ButtonProps';
import { ButtonWrapper } from './style';

export class Button extends React.Component<ButtonProps> {
    public render(): React.ReactNode {
        return (
            <ButtonWrapper
                active={this.props.active}
                error={this.props.error}
                circle={this.props.circle}
            >{this.props.children}</ButtonWrapper>
        );
    }
}