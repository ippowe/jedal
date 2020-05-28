import React, { useEffect } from 'react';
import styled from 'styled-components';

import Woman from '../../public/images/womanMini.svg';

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

    @media screen and (max-width: 540px) {
        left: 0;
    }
`;

const Description = styled.div`
    width: calc(100% - 94px);
    text-align: center;
    word-break: keep-all;
`;

const StyledWoman = styled(Woman)`
    position: absolute;
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
            <DescriptionWindow>
                <Description>맛있는 식사가 절로 기대되는 정말 좋은 선택이십니다.</Description>
            </DescriptionWindow>
        </Wrapper>
    );
};

export default QnAFeedback;
