import React from 'react';
import styled from 'styled-components';
interface Props {
    description: string;
    children: React.ReactNode;
}

const Container = styled.div`
    position: relative;
    padding-top: 47px;
    height: 363px;
    box-sizing: border-box;
`;
const Description = styled.div`
    white-space: pre-line;
    text-align: center;
    line-height: 1.38;
    color: #333740;
`;
const GuideContent: React.FC<Props> = ({ description, children }) => {
    return (
        <Container>
            <Description>{description}</Description>
            {children}
        </Container>
    );
};

export default GuideContent;
