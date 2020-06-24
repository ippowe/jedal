import React from 'react';
import styled, { CSSProp } from 'styled-components';

interface Props {
    name: string;
    emojiCss?: CSSProp;
}

const Container = styled.img<{ css?: CSSProp }>`
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: top;
    ${(props) => props.css}
`;

const Emoji: React.FC<Props> = ({ name, emojiCss }) => {
    return <Container src={`images/${name}.png`} alt={name} css={emojiCss} />;
};

export default Emoji;
