import React from 'react';
import styled from 'styled-components';

interface IQuestion {
    className?: string;
    question: string;
    emphasis?: string[];
}

const setPhrase = (question: string, emphasis: string[]): JSX.Element[] => {
    const result = [];
    let temp;
    emphasis.forEach((emp) => {
        const target = !temp ? question.split(emp) : (temp.split(emp) as string[]);
        result.push(target.shift(), <b key={emp}>{emp}</b>);
        temp = target.shift();
    });
    result.push(temp);
    return result;
};

const Question: React.FC<IQuestion> = (props) => {
    const { className, question, emphasis } = props;
    const phrase = setPhrase(question, emphasis);
    return <Wrapper className={className}>{phrase}</Wrapper>;
};

export default Question;

const Wrapper = styled.div`
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    word-break: keep-all;
    width: 100%;
    /* Todo 디자인에서 Width가 확정되면 수정 */
    max-width: 274px;
`;
