import styled, { css } from 'styled-components';
import { OpenSans } from '../../theme/fonts/fonts';
import { ColorPalette } from '../../theme/colors/colors';

const AuthorStyles = css`
    font-family: ${OpenSans.italic};
    color: ${ColorPalette.Gray.soft};
    font-size: 12px;
    padding: 0 24px 12px;
`;

export const ReadMoreWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .9);
    display: none;
    border-radius: 6px;
`;

export const ReadMoreLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    border: 3px solid white;
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
        border: 3px solid ${ColorPalette.State.active};
         color: ${ColorPalette.State.active};
    }
`;

export const NewsWrapper = styled.article`
    border-radius: 6px;
    box-shadow: 0 1px 24px 0 rgba(0, 0, 0, 0.04);
    background: white;
    position: relative;
    
    &:hover {
        ${ReadMoreWrapper} {
            display: block;
        }
    }
`;

export const NewsHeader = styled.header<{ urlToImage?: string }>`
    width: 450px;
    height: 250px;
    background: ${({ urlToImage }) => (urlToImage ? `url(${ urlToImage})` : 'url(https://www.freeiconspng.com/uploads/no-image-icon-4.png)')} 50% 50% no-repeat;
    background-size: contain;
    border-radius: 6px;
`;

export const Description = styled.p`
    font-family: ${OpenSans.regular};
    color: ${ColorPalette.Gray.middle};
    padding: 0 24px 12px;
    margin: 0;
`;

export const NewsLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h4`
    font-family: ${OpenSans.regular};
    color: ${ColorPalette.Gray.soft};
    padding: 12px 24px;
    margin: 0;
`;

export const Author = styled.div`
    ${AuthorStyles};
`;

export const PublishedAt = styled.div`
    ${AuthorStyles};
`;