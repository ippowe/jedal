import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import QnAHeader from '../components/QnAHeader';
import Question from '../components/Question';
import SelectButton from '../components/SelectButton';
import SelectContainer from '../components/SelectContainer';

import compareArrays from '../utils/compareArrays';

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
`;

const DUMMY_QUESTION = {
    question: {
        phrase: '특별히 좋아하는 음식 종류나 드시고 싶은 것이 있으십니까?',
        empasis: ['음식 종류', '드시고 싶은 것'],
    },
    isMultiple: true,
    options: [
        '밥',
        '국 / 찌개',
        '조림 / 찜',
        '구이 / 볶음 / 부침 / 튀김',
        '샐러드 / 밑반찬',
        '만두 / 면류 / 그라탕',
        '간식',
    ],
};

const qna: React.FC<QnAProps> = (props) => {
    const { className } = props;
    const [answer, setAnswer] = useState<string | string[]>('');
    const [isAllSelect, setIsAllSelect] = useState(false);
    const { question, isMultiple, options } = DUMMY_QUESTION;

    useEffect(() => {
        if (!isMultiple) return;
        if (answer instanceof Array) {
            const isAllSelect = compareArrays([...answer].sort(), [...options].sort());
            setIsAllSelect(isAllSelect);
        } else {
            setIsAllSelect(false);
        }
    }, [answer]);

    const handleClickOption = (option: string): void => {
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
            setAnswer(option);
        }
    };

    return (
        <Wrapper className={className}>
            <Header />
            <StyledQuestion question={question.phrase} emphasis={question.empasis} />
            {isMultiple ? <Info>복수 선택이 가능합니다.</Info> : null}
            <Container>
                {options.map((option) => (
                    <SelectButton
                        option={option}
                        key={option}
                        onClick={handleClickOption}
                        isSelect={isMultiple ? answer.includes(option) : answer === option}
                    />
                ))}
                {isMultiple ? (
                    <SelectButton option="모두 선택" onClick={handleClickOption} isSelect={isAllSelect}>
                        모두 선택
                    </SelectButton>
                ) : null}
            </Container>
        </Wrapper>
    );
};

export default qna;
