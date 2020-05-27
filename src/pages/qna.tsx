import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import QnAHeader from '../components/QnAHeader';
import Question from '../components/Question';
import SelectButton from '../components/SelectButton';
import SelectContainer from '../components/SelectContainer';
import ProgressBar from '../components/ProgressBar';

import compareArrays from '../utils/compareArrays';

import Questions from '../assets/questions.json';

interface QnAProps {
    className?: string;
}

const Wrapper = styled.div``;

const Header = styled(QnAHeader)`
    margin-bottom: 42px;
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

const Container = styled(SelectContainer)`
    padding: 0 20px;
    margin-top: 20px;
    margin-bottom: 42px;
`;

const BarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3px;
    margin: 0 22px;
    margin-bottom: 13px;
`;

const Bar = styled(ProgressBar)`
    height: 3px;
    width: 100%;
    margin-right: 7px;

    &:last-child {
        margin-right: 0;
    }
`;

const qna: React.FC<QnAProps> = (props) => {
    const { className } = props;
    const [answer, setAnswer] = useState<string | string[]>('');
    const [isAllSelect, setIsAllSelect] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [question, setQuestion] = useState(Questions[currentStep]);

    useEffect(() => {
        setQuestion(Questions[currentStep]);
    }, [currentStep]);

    useEffect(() => {
        const { isMultiple, options } = question;
        if (!isMultiple) return;
        if (answer instanceof Array) {
            const isAllSelect = compareArrays([...answer].sort(), [...options].sort());
            setIsAllSelect(isAllSelect);
        } else {
            setIsAllSelect(false);
        }
    }, [answer, question]);

    const handleClickOption = (option: string): void => {
        const { isMultiple, options } = question;
        if (isMultiple) {
            let newAnswer;
            if (option === '모두 선택') {
                if (isAllSelect) {
                    newAnswer = [];
                } else {
                    newAnswer = [...options];
                }
            } else {
                if (Array.isArray(answer)) {
                    newAnswer = answer.includes(option) ? answer.filter((a) => a !== option) : [...answer, option];
                } else {
                    newAnswer = [option];
                }
            }
            setAnswer(newAnswer);
        } else {
            if (option === answer) {
                setAnswer('');
            } else {
                setAnswer(option);
            }
        }
    };

    const handleClickNext = (): void => {
        const endIndex = Questions.length - 1;
        const next = currentStep + 1;
        if (next <= endIndex) {
            setCurrentStep(next);
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
            <Header
                canGoPrev={currentStep > 0}
                canGoNext={true}
                onClickNext={handleClickNext}
                onClickPrev={handleClickPrev}
            />
            <StyledQuestion question={question.question.phrase} emphasis={question.question.empasis} />
            {question.isMultiple ? <Info>복수 선택이 가능합니다.</Info> : null}
            <Container>
                {question.options.map((option) => (
                    <SelectButton
                        option={option}
                        key={option}
                        onClick={handleClickOption}
                        isSelect={question.isMultiple ? answer.includes(option) : answer === option}
                    />
                ))}
                {question.isMultiple ? (
                    <SelectButton option="모두 선택" onClick={handleClickOption} isSelect={isAllSelect}>
                        모두 선택
                    </SelectButton>
                ) : null}
            </Container>
            <BarContainer>
                {new Array(Questions.length).fill(1).map((el, index) => (
                    <Bar key={`bar_key_${index}`} percent={index < currentStep ? 100 : 0} />
                ))}
            </BarContainer>
        </Wrapper>
    );
};

export default qna;
