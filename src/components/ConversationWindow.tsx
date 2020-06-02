import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';
import Ink from 'react-ink';

interface Props {
    name: string;
    description: string;
    content: string;
    stage: number;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    padding: 35px 27px 22px 35px;
    background-color: #f4f5f8;
    min-height: calc(100vh - 408px);
    box-sizing: border-box;
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
    font-weight: 500;
    line-height: 1.4;
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

const Footer = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
`;

const blinker = keyframes`
  50% {
    opacity: 0;
  }
`;
const NextButton = styled.button<{ content: string }>`
    position: relative;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.75;
    color: #333740;
    background: none;
    animation: ${blinker} 1.3s linear infinite;
    animation-delay: ${(props) => `${props.content.length * 50 + 2500}ms`};
`;

const ContentWrapper = styled.div``;

const ConversationWindow: React.FC<Props> = ({ name, description, content, stage }) => {
    const router = useRouter();
    const contentRef = useRef<HTMLDivElement>();
    const onClickNextButton = () => {
        router.push(`/guide${stage + 1}`);
    };

    useEffect(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < content.length && contentRef.current) {
                contentRef.current.innerHTML += content.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        setTimeout(typeWriter, 2500);
    }, []);

    return (
        <Container>
            <ContentWrapper>
                <Header>
                    <Name>{name}</Name>
                    <Description>{description}</Description>
                </Header>
                <Content ref={contentRef} />
            </ContentWrapper>
            <Footer>
                <NextButton onClick={onClickNextButton} content={content}>
                    {'다음으로 >'}
                    <Ink />
                </NextButton>
            </Footer>
        </Container>
    );
};

export default ConversationWindow;
