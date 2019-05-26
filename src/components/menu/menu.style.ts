import styled from 'styled-components';
import { ColorPalette } from '../../theme/colors/colors';
import { FlexCenter, FlexVerticalCenter } from '../../theme/commot-style/common-style';
import { OpenSans } from '../../theme/fonts/fonts';

export const MenuNav = styled.nav`
    position: fixed;
    width: 100%;
    top: 70px;
    max-height: 70px;
    z-index: 1;
    border-bottom: 1px solid ${ColorPalette.Background.dark};
`;

export const MenuList = styled.ul`
    height: 100%;
    margin: 0;
    flex-wrap: wrap;
    background: white;
    ${FlexCenter};
`;

export const MenuItem = styled.li`
    height: 40px;
    list-style: none;
    padding: 0 14px;
    font-family: ${OpenSans.bold};
    font-size: 14px;
    ${FlexVerticalCenter};
    
    &:hover {
        cursor: pointer;
        color: ${ColorPalette.State.active};
    }
`;