import styled from 'styled-components';
import { ButtonWrapper } from '../../theme/button/style';
import { ColorPalette } from '../../theme/colors/colors';
import { OpenSans } from '../../theme/fonts/fonts';

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
        
        label {
            position: relative;
            margin-bottom: 15px;
            
            small {
                font-family: ${OpenSans.regular};
                position: absolute;
                top: 50%;
                left: 0;
                display: inline-block;
                transform: translateY(-50%);
                font-size: 1rem;
                text-transform: none;
                color: ${ColorPalette.Gray.soft};
            }
            
            input {
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
            }
        }
        
        .label-active {
            input {
                border-color: ${ColorPalette.State.active};
            }
            
            input:not(:focus) {
                & + small {
                    color: ${ColorPalette.State.active};
                    top: -5px;
                    font-size: 0.75rem;
                }
            }
        }
    }
`;