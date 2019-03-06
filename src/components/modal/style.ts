import styled from 'styled-components';
import { ButtonWrapper } from '../../theme/button/style';
import { ColorPalette } from '../../theme/colors/colors';
import { OpenSans } from '../../theme/fonts/fonts';
import { FormFieldInput, FormFieldSmall } from '../formField/style';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 70px);
    font-family: ${OpenSans.regular};
    background: ${ColorPalette.Background.dark};
`;

export const ModalContent = styled.form`
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2c3940;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${ColorPalette.Background.light};
    box-shadow: 1px 1px 3px ${ColorPalette.Gray.dark};
    
    ${ButtonWrapper} {
        width: 100px;
        height: 100px;
        margin: 20px auto 0;
    }
    
    fieldset {
        width: 100%;
        border: 0;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        text-transform: uppercase;
        font-family: ${OpenSans.bold};
        
        legend {
            margin: 0 auto;
        }
        
        .label-active {
            ${FormFieldInput} {
                border-color: ${ColorPalette.State.active};
            }
            
            ${FormFieldInput}:not(:focus) {
                & + ${FormFieldSmall} {
                    color: ${ColorPalette.State.active};
                    top: -5px;
                    font-size: 0.75rem;
                }
            }
        }
    }
`;