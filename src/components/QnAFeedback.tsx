import React, { useEffect } from 'react';
import styled from 'styled-components';

interface IQnAFeedback {
    className?: string;
    onCloseFeedback?: () => void;
    value: string | string[];
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: calc((100vw - 540px) / 2);
    height: calc(100vh - 16px);
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
    background-color: #ffffff;

    @media screen and (max-width: 540px) {
        left: 0;
    }
`;

const DescriptionWindow = styled.div`
    position: relative;
    background-image: url('/images/feedbackWindow.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    margin: 0 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Description = styled.div`
    width: 100%;
    text-align: center;
    word-break: keep-all;
    position: absolute;
    top: 50%;
    font-size: 18px;
    padding: 0 68px;
    line-height: 26px;
    box-sizing: border-box;
`;

const QnAFeedback: React.FC<IQnAFeedback> = (props) => {
    const { className, onCloseFeedback, value } = props;

    useEffect(() => {
        window.addEventListener('click', onCloseFeedback);
        setTimeout((): void => {
            onCloseFeedback();
        }, 1500);
        return (): void => {
            window.removeEventListener('click', onCloseFeedback);
        };
    }, []);

    return (
        <Wrapper className={className}>
            <DescriptionWindow />
            <Description>맛있는 식사가 절로 기대되는 정말 좋은 선택이십니다.</Description>
        </Wrapper>
    );
};

export default QnAFeedback;
