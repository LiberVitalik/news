import styled from 'styled-components';
import { ColorPalette } from '../colors/colors';
import { OpenSans } from '../fonts/fonts';

export const ButtonWrapper = styled.button`
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
`;