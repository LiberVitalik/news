import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const IconWrapper = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

export const UserWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    
    button {
        margin-right: 1rem;
    }
`;