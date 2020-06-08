import React from 'react';
import styled from 'styled-components';

interface Props {
    name: string;
}

const Container = styled.img`
    width: 18px;
    height: 18px;
    vertical-align: top;
`;

const Emoji: React.FC<Props> = ({ name }) => {
    return <Container src={`images/${name}.png`} alt={name} />;
};

export default Emoji;
