import React from 'react';
import styled from 'styled-components';

interface Props {
    name: string;
    description: string;
    content: string;
}

const Container = styled.div`
    position: relative;
    z-index: 1;
    padding: 35px 45px 22px 35px;
    background-color: #f4f5f8;
    min-height: calc(100vh - 408px);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
`;

const Content = styled.div`
    margin-top: 23px;
    padding-left: 20px;
    white-space: pre-line;
    font-size: 15px;
`;

const Name = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-right: 22px;
    line-height: 1.22;
`;

const Description = styled.span`
    color: #7b818f;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.15px;
`;
const ConversationWindow: React.FC<Props> = ({ name, description, content }) => {
    return (
        <Container>
            <Header>
                <Name>{name}</Name>
                <Description>{description}</Description>
            </Header>
            <Content>{content}</Content>
        </Container>
    );
};

export default ConversationWindow;
