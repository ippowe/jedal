import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import QnAHeader from '../components/QnAHeader';
import QnAFeedback from '../components/QnAFeedback';
import DecoratedPhrase from '../components/DecoratedPhrase';
import SelectButton, { OptionType } from '../components/SelectButton';
import SelectContainer from '../components/SelectContainer';
import ProgressBar from '../components/ProgressBar';

import QUESTIONS from '../assets/questions.json';

import { RootState } from '../modules';
import { setAnswer } from '../modules/answer';

interface QnAProps {
    className?: string;
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

const Question = styled(DecoratedPhrase)`
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    word-break: keep-all;
    width: 100%;
    /* Todo 디자인에서 Width가 확정되면 수정 */
    max-width: 274px;
    margin: 0 auto;
    margin-bottom: 5px;
`;

const Info = styled.div`
    color: #b0b0b0;
    font-size: 15px;
    text-align: center;
`;

const ButtonsContainer = styled(SelectContainer)`
    padding: 0 20px;
    height: 358px;
    align-content: center;
`;

const BarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3px;
    margin: 0 auto;
    margin-bottom: 13px;
    width: calc(100% - 44px);
`;

const Bar = styled(ProgressBar)`
    height: 3px;
    width: 100%;
    margin-right: 7px;

    &:last-child {
        margin-right: 0;
    }
`;

const questionKeys = Object.keys(QUESTIONS);
const ALL = ['모두 좋음', '모두'];
export const SELECT_ALL = '모두';
const NONE = ['없음'];
export const SELECT_NONE = '없음';

const getValueFromOption = (option: OptionType): string => {
    if (typeof option === 'string') {
        if (ALL.includes(option)) {
            return SELECT_ALL;
        } else if (NONE.includes(option)) {
            return SELECT_NONE;
        } else return option.replace(/\s/g, '');
    } else if (option instanceof Array) {
        return option.join('').replace(/\s/g, '');
    } else {
        return option.value;
    }
};

const getCurrentStepIndex = (currentStep: string): number => {
    const index = questionKeys.findIndex((key) => key === currentStep);
    if (index === -1) {
        throw new Error(`Invalid Step: ${currentStep}`);
    } else {
        return index;
    }
};

const checkFillBar = (index: number, currentStep: string, isShowFeedback: boolean): boolean => {
    const currentIndex = questionKeys.findIndex((key) => key === currentStep);
    if (index === currentIndex) {
        return isShowFeedback;
    } else if (index < currentIndex) {
        return true;
    } else {
        return false;
    }
};

const checkIsSelectAll = (values: string[], answer: string, currentStep: string): boolean => {
    if (currentStep === 'hateIngredients') {
        return values.length - 1 === answer.length;
    } else {
        return values.length === answer.length;
    }
};

const selectAllValues = (values: string[], isSelectAll: boolean, currentStep: string): string[] => {
    if (currentStep === 'hateIngredients') {
        return isSelectAll ? [] : [...values.filter((value) => value !== SELECT_NONE)];
    } else {
        return isSelectAll ? [] : [...values];
    }
};

const getValues = (value: string, answer: string[], isAnswerList: boolean): string[] => {
    if (value === SELECT_NONE) {
        return [value];
    } else {
        return isAnswerList
            ? answer.includes(value)
                ? (answer as string[]).filter((a) => a !== value).filter((a) => a !== SELECT_ALL)
                : [...(answer as string[]), value].filter((a) => a !== SELECT_NONE)
            : [value];
    }
};

const qna: React.FC<QnAProps> = (props) => {
    const { className } = props;
    const [currentStep, setCurrentStep] = useState(questionKeys[0]);
    const [values, setValues] = useState<string[]>([]);
    const [isShowFeedback, setIsShowFeedback] = useState(false);
    const [question, setQuestion] = useState(QUESTIONS[currentStep]);
    const answer = useSelector(({ answer }: RootState) => answer[currentStep]);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        setQuestion(QUESTIONS[currentStep]);
    }, [currentStep]);

    useEffect(() => {
        const { options } = question;
        const values = (options as OptionType[]).map(getValueFromOption);
        setValues(values);
    }, [question]);

    const handleClickOption = (value: string): void => {
        const { isMultiple } = question;
        const isAnswerList = Array.isArray(answer);
        const isSelectAll = isAnswerList && checkIsSelectAll(values, answer, currentStep);
        let newAnswer: string | string[];
        if (isMultiple) {
            if (value === SELECT_ALL) {
                newAnswer = selectAllValues(values, isSelectAll, currentStep);
            } else {
                newAnswer = getValues(value, answer, isAnswerList);
            }
        } else {
            newAnswer = value === answer ? null : value;
        }
        dispatch(setAnswer({ [currentStep]: newAnswer }));
    };

    const handleClickNext = (): void => {
        setIsShowFeedback(true);
    };

    const handleClickPrev = (): void => {
        const currentStepIndex = getCurrentStepIndex(currentStep);
        const startIndex = 0;
        const prevIndex = currentStepIndex - 1;

        if (currentStepIndex === -1) {
            throw new Error(`Invalid Step: ${currentStep}`);
        } else if (prevIndex >= startIndex) {
            setCurrentStep(questionKeys[prevIndex]);
        } else {
            return;
        }
    };

    const forwardToNextStep = (step: number): void => {
        setValues([]);
        setCurrentStep(questionKeys[step]);
    };

    const handleCloseFeedback = (): void => {
        const currentStepIndex = getCurrentStepIndex(currentStep);
        const endIndex = questionKeys.length - 1;
        const next = currentStepIndex + 1;
        if (next <= endIndex) {
            forwardToNextStep(next);
            setIsShowFeedback(false);
        } else {
            router.push('/result');
        }
    };

    return (
        <Wrapper className={className}>
            <QnAHeader
                canGoPrev={getCurrentStepIndex(currentStep) > 0}
                canGoNext={answer && Object.keys(answer).length >= 1}
                onClickNext={handleClickNext}
                onClickPrev={handleClickPrev}
            />
            <Question phrase={question.question} />
            {question.isMultiple ? <Info>복수 선택이 가능합니다.</Info> : null}
            <ButtonsContainer>
                {(question.options as OptionType[]).map((option, index) => {
                    const value = values[index];
                    const isSelect = question.isMultiple ? !!answer?.includes(values[index]) : answer === values[index];
                    return (
                        <SelectButton
                            option={option}
                            value={value}
                            key={value + '_' + index}
                            onClick={handleClickOption}
                            isSelect={isSelect}
                        />
                    );
                })}
            </ButtonsContainer>
            <BarContainer>
                {questionKeys.map((el, index) => (
                    <Bar
                        key={`bar_key_${index}`}
                        percent={checkFillBar(index, currentStep, isShowFeedback) ? 100 : 0}
                        duration={0}
                    />
                ))}
            </BarContainer>
            {isShowFeedback ? (
                <QnAFeedback answer={answer} onCloseFeedback={handleCloseFeedback} step={currentStep} />
            ) : null}
        </Wrapper>
    );
};

export default qna;
