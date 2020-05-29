import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import QnAHeader from '../components/QnAHeader';
import QnAFeedback from '../components/QnAFeedback';
import DecoratedPhrase from '../components/DecoratedPhrase';
import SelectButton, { OptionType } from '../components/SelectButton';
import SelectContainer from '../components/SelectContainer';
import ProgressBar from '../components/ProgressBar';

import compareArrays from '../utils/compareArrays';

import Questions from '../assets/questions.json';

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

const SELECT_ALL = '모두 선택';

const getValueFromOption = (option: OptionType): string => {
    if (typeof option === 'string') {
        return option.replace(/\s/g, '');
    } else if (option instanceof Array) {
        return option.join('').replace(/\s/g, '');
    } else {
        return option.value;
    }
};

const qna: React.FC<QnAProps> = (props) => {
    const { className } = props;
    const [answer, setAnswer] = useState<string | string[]>('');
    const [currentStep, setCurrentStep] = useState(0);
    const [values, setValues] = useState<string[]>([]);
    const [isShowFeedback, setIsShowFeedback] = useState(false);
    const [question, setQuestion] = useState(Questions[currentStep]);

    useEffect(() => {
        setQuestion(Questions[currentStep]);
    }, [currentStep]);

    useEffect(() => {
        const { options } = question;
        const values = (options as OptionType[]).map(getValueFromOption);
        setValues(values);
    }, [question]);

    const handleClickOption = (value: string): void => {
        const { isMultiple, options } = question;
        const isAnswerList = Array.isArray(answer);
        const isSelectAll = isAnswerList && answer.length === options.length;
        let newAnswer;
        if (isMultiple) {
            if (value === SELECT_ALL) {
                newAnswer = isSelectAll ? [] : [...values];
            } else {
                newAnswer = isAnswerList
                    ? answer.includes(value)
                        ? (answer as string[]).filter((a) => a !== value)
                        : [...(answer as string[]), value]
                    : [value];
            }
        } else {
            newAnswer = value === answer ? '' : value;
        }
        setAnswer(newAnswer);
    };

    const handleClickNext = (): void => {
        setIsShowFeedback(true);
    };

    const handleClickPrev = (): void => {
        const startIndex = 0;
        const prev = currentStep - 1;
        if (prev >= startIndex) {
            setCurrentStep(prev);
        } else {
            return;
        }
    };

    const fowardToNextStep = (): void => {
        setAnswer('');
        const endIndex = Questions.length - 1;
        const next = currentStep + 1;
        if (next <= endIndex) {
            setCurrentStep(next);
        } else {
            //Todo 상세 페이지로 라우팅
            setCurrentStep(0);
        }
    };

    const handleCloseFeedback = (): void => {
        fowardToNextStep();
        setIsShowFeedback(false);
    };

    return (
        <Wrapper className={className}>
            <QnAHeader
                canGoPrev={currentStep > 0}
                canGoNext={answer && answer.length >= 1}
                onClickNext={handleClickNext}
                onClickPrev={handleClickPrev}
            />
            <Question phrase={question.question} />
            {question.isMultiple ? <Info>복수 선택이 가능합니다.</Info> : null}
            <ButtonsContainer>
                {(question.options as OptionType[]).map((option, index) => {
                    const value = values[index];
                    const isSelect = question.isMultiple ? answer.includes(value) : answer === value;
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
                {question.isMultiple ? (
                    <SelectButton
                        value={SELECT_ALL}
                        option={SELECT_ALL}
                        onClick={handleClickOption}
                        isSelect={Array.isArray(answer) && answer.length === question.options.length}
                    >
                        모두 선택
                    </SelectButton>
                ) : null}
            </ButtonsContainer>
            <BarContainer>
                {new Array(Questions.length).fill(1).map((el, index) => (
                    <Bar key={`bar_key_${index}`} percent={index < currentStep ? 100 : 0} />
                ))}
            </BarContainer>
            {isShowFeedback ? (
                <QnAFeedback answer={answer} onCloseFeedback={handleCloseFeedback} step={currentStep} />
            ) : null}
        </Wrapper>
    );
};

export default qna;
