import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import QnAHeader from '../components/QnAHeader';
import Question from '../components/Question';
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

const StyledQuestion = styled(Question)`
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

const parseOptionToString = (option: OptionType): string => {
    if (typeof option === 'string') {
        return option;
    } else if (option instanceof Array) {
        return option.join(' ');
    } else if (typeof option === 'object' && option !== null) {
        return Object.keys(option)
            .map((key) => option[key])
            .join(' ');
    } else {
        throw new Error('Invalid Option type');
    }
};

const SELECT_ALL = '모두 선택';

const qna: React.FC<QnAProps> = (props) => {
    const { className } = props;
    const [answer, setAnswer] = useState<string | string[]>('');
    const [isAllSelect, setIsAllSelect] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [values, setValues] = useState<string[]>([]);
    const [question, setQuestion] = useState(Questions[currentStep]);

    useEffect(() => {
        setQuestion(Questions[currentStep]);
    }, [currentStep]);

    useEffect(() => {
        const { options } = question;
        const values = (options as OptionType[]).map(parseOptionToString);
        setValues(values);
    }, [question]);

    useEffect(() => {
        const { isMultiple } = question;
        if (!isMultiple) return;
        if (answer instanceof Array) {
            const isAllSelect = compareArrays([...answer].sort(), [...values].sort());
            setIsAllSelect(isAllSelect);
        } else {
            setIsAllSelect(false);
        }
    }, [answer, question, values]);

    const handleClickOption = (value: string): void => {
        const { isMultiple } = question;
        if (isMultiple) {
            let newAnswer;
            if (value === SELECT_ALL) {
                if (isAllSelect) {
                    newAnswer = [];
                } else {
                    newAnswer = [...values];
                }
            } else {
                if (Array.isArray(answer)) {
                    newAnswer = answer.includes(value) ? answer.filter((a) => a !== value) : [...answer, value];
                } else {
                    newAnswer = [value];
                }
            }
            setAnswer(newAnswer);
        } else {
            if (value === answer) {
                setAnswer('');
            } else {
                setAnswer(value);
            }
        }
    };

    const handleClickNext = (): void => {
        const endIndex = Questions.length - 1;
        const next = currentStep + 1;
        if (next <= endIndex) {
            setCurrentStep(next);
            setAnswer('');
        } else {
            //Todo 상세 페이지로 라우팅 시켜야됨
            setCurrentStep(0);
        }
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

    return (
        <Wrapper className={className}>
            <QnAHeader
                canGoPrev={currentStep > 0}
                canGoNext={answer && answer.length >= 1}
                onClickNext={handleClickNext}
                onClickPrev={handleClickPrev}
            />
            <StyledQuestion question={question.question.phrase} emphasis={question.question.empasis} />
            {question.isMultiple ? <Info>복수 선택이 가능합니다.</Info> : null}
            <ButtonsContainer>
                {(question.options as OptionType[]).map((option, index) => (
                    <SelectButton
                        option={option}
                        value={values[index]}
                        key={values[index] + '_' + index}
                        onClick={handleClickOption}
                        isSelect={question.isMultiple ? answer.includes(values[index]) : answer === values[index]}
                    />
                ))}
                {question.isMultiple ? (
                    <SelectButton
                        value={SELECT_ALL}
                        option={SELECT_ALL}
                        onClick={handleClickOption}
                        isSelect={isAllSelect}
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
        </Wrapper>
    );
};

export default qna;
