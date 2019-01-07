import styled  from 'styled-components';
import { ColorPalette } from '../colors/colors';
import { OpenSans } from '../fonts/fonts';

const buttonActive = `
    border: 1px solid ${ColorPalette.State.active};
    color: ${ColorPalette.State.active};
    
    &:hover {
        border-color: ${ColorPalette.State.active};
    }
`;

const buttonError = `
    border: 1px solid ${ColorPalette.State.error};
    color: ${ColorPalette.State.error};
    
    &:hover {
        border-color: ${ColorPalette.State.error};
    }
`;

export const ButtonWrapper = styled.button<{ circle?: boolean; active?: boolean; error?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    font-family: ${OpenSans.regular};
    font-size: 0.75rem;
    background: transparent;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid ${ColorPalette.Gray.soft};
    
    &:hover {
        border-color: white;
    }
    
    ${({circle}) => circle ? 'border-radius: 50%;' : ''};
    ${({active}) => active ? `${buttonActive}` : ''};
    ${({error}) => error ? `${buttonError}` : ''};
`;
