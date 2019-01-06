import styled from 'styled-components';
import {ColorPalette} from '../../theme/colors/colors';
import {OpenSans} from '../../theme/fonts/fonts';

export const ModalWrapper = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    font-family: ${OpenSans.regular};
    border: 1px solid ${ColorPalette.Gray.soft};
    
    &:hover {
        border-color: white;
    }
`;