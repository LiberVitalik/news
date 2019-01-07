import styled from 'styled-components';
import { ColorPalette } from '../../theme/colors/colors';

export const HeaderWrapper = styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${ColorPalette.Gray.dark};
`;

const logoUrl = require('../../img/logo.png');

export const Logo = styled.a`
    width: 79px;
    height: 35px;
    background: url(${logoUrl}) top no-repeat;
    margin-left: 2%;
    
    &:hover {
        background-position: bottom;
    }
`;