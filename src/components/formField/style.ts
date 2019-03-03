import styled from 'styled-components';
import { ColorPalette } from '../../theme/colors/colors';
import { OpenSans } from '../../theme/fonts/fonts';

export const FormFieldLabel = styled.label`
    position: relative;
    margin-bottom: 15px;
`;

export const FormFieldInput = styled.input`
    font-family: ${OpenSans.regular};
    background-color: transparent;
    border: none;
    border-radius: 0;
    outline: none;
    font-size: 1rem;
    padding: 0;
    box-sizing: content-box;
    transition: all .3s;
    color: white;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${ColorPalette.Gray.soft};
    
    &:focus {
        border-color: ${ColorPalette.State.active};
    
        & + small {
            color: ${ColorPalette.State.active};
            top: -5px;
            font-size: 0.75rem;
        }
    }
`;

export const FormFieldSmall = styled.small`
    font-family: ${OpenSans.regular};
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-block;
    transform: translateY(-50%);
    font-size: 1rem;
    text-transform: none;
    color: ${ColorPalette.Gray.soft};
`;
