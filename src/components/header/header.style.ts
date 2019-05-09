import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ColorPalette } from '../../theme/colors/colors';

export const HeaderWrapper = styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    display: flex;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    background: ${ColorPalette.Gray.dark};
`;

export const LogoIcon = styled(FontAwesomeIcon)`
    color: ${ColorPalette.Gray.light};
`;

export const Logo = styled.a`
    margin-left: 2%;
    padding: 8px;
    
    &:hover {
        ${LogoIcon} {
            color: white;
        }
    }
`;