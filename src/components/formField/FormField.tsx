import * as React from 'react';
import { FormFieldProps, FormFieldState } from './FormField.types';
import { FormFieldInput, FormFieldLabel, FormFieldSmall } from './style';

export class FormField extends React.PureComponent<FormFieldProps, FormFieldState> {

    public state = {
        isLabelActive: false
    };

    public render(): React.ReactNode {

        const { name, title, value, type } = this.props;

        return (
            <React.Fragment>
                <FormFieldLabel className={this.labelActiveHandler()}>
                    <FormFieldInput
                           type={type}
                           name={name}
                           onChange={this.formFieldHandler}
                           value={value}
                           required
                    />
                    <FormFieldSmall>{title}</FormFieldSmall>
                </FormFieldLabel>
            </React.Fragment>
        );
    }

    private formFieldHandler = (event: React.FormEvent<HTMLInputElement>): void => {
        this.props.onChange(event.currentTarget.value);

        this.setState({
            isLabelActive: !!event.currentTarget.value
        });
    };

    private labelActiveHandler = (): string => this.state.isLabelActive ? 'label-active' : '';

}