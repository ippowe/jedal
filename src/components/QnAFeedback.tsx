import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DecoratedPhrase from './DecoratedPhrase';

import FEEDBACKS from '../assets/feedbacks.json';
import formatString from '../utils/formatString';
interface IQnAFeedback {
    className?: string;
    onCloseFeedback?: () => void;
    answer: string | string[];
    step: string;
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

const Description = styled(DecoratedPhrase)`
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

const NONE = 'none';
const ONE = 'one';
const MANY = 'many';
const ALL = 'all';
const FISH = '어류/패류';

const getFeedback = (step: string, answer: string | string[]): string => {
    switch (step) {
        case 'season': {
            return formatString(FEEDBACKS[step], answer as string);
        }
        case 'level': {
            return FEEDBACKS[step][answer as string];
        }
        case 'categories': {
            const numberOfValues = (answer as string[]).length;
            if (numberOfValues === 1) {
                return FEEDBACKS['categories'][ONE];
            } else if (numberOfValues < 7 && numberOfValues > 1) {
                return FEEDBACKS['categories'][MANY];
            } else if (numberOfValues >= 7) {
                return FEEDBACKS['categories'][ALL];
            } else {
                throw new Error(`Invalid answer: ${answer}`);
            }
        }
        case 'hateIngredients': {
            const numberOfValues = (answer as string[]).length;
            if (numberOfValues === 1) {
                return answer[0] === FISH
                    ? FEEDBACKS['hateIngredients'][FISH]
                    : answer[0] === '없음'
                    ? FEEDBACKS['hateIngredients'][NONE]
                    : formatString(FEEDBACKS['hateIngredients'][ONE], answer[0]);
            } else if (numberOfValues < 4 && numberOfValues > 1) {
                return FEEDBACKS['hateIngredients'][MANY];
            } else if (numberOfValues >= 4) {
                return FEEDBACKS['hateIngredients'][ALL];
            } else {
                throw new Error(`Invalid answer: ${answer}`);
            }
        }
        default: {
            throw new Error(`Invalid step ${step}`);
        }
    }
};

const QnAFeedback: React.FC<IQnAFeedback> = (props) => {
    const { className, onCloseFeedback, answer, step } = props;
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        window.addEventListener('click', onCloseFeedback);
        const timeId = setTimeout((): void => {
            onCloseFeedback();
        }, 1500);
        return (): void => {
            window.removeEventListener('click', onCloseFeedback);
            clearTimeout(timeId);
        };
    }, []);

    useEffect(() => {
        if (!answer) return;
        const feedback = getFeedback(step, answer);
        setFeedback(feedback);
    }, [step, answer]);

    return (
        <Wrapper className={className}>
            <DescriptionWindow />
            <Description phrase={feedback} />
        </Wrapper>
    );
};

export default QnAFeedback;
