import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ColorPalette } from '../../theme/colors/colors';
import { OpenSans } from '../../theme/fonts/fonts';

export const FormSearch = styled.form`
    flex-grow: 2;
    background: pink;
    display: flex;
    justify-content: flex-end;
    
    label {
        position: relative;
    }
`;

export const SearchField = styled.input`
    width: 35px;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px 30px 10px 10px;
    border-radius: 10em;
    transition: width .3s ease-in-out;
    border: none;
    outline: transparent;
    cursor: pointer;
    font-family: ${OpenSans.italic};
    background: ${ColorPalette.Background.light};
    color: ${ColorPalette.Background.dark};
    
    &:focus {
        width: 250px;
    }
    
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button {
        display: none; 
    }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
    color: ${ColorPalette.Background.dark};
    position: absolute;
    right: 34px;
    font-size: 18px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`;