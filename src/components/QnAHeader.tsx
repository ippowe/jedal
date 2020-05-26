import React from 'react';
import styled from 'styled-components';

type MouseEvent = React.MouseEvent<HTMLButtonElement>;
interface QnAHeaderProps {
    className?: string;
    onClickNext?: (e: MouseEvent) => void;
    onClickPrev?: (e: MouseEvent) => void;
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px 10px 20px;
    /* Todo 제플린에서 값을 볼수 없어서 디자이너분에게 물어봐야됨 */
    border-bottom: 1px solid #eeeeee;
`;

const Button = styled.button`
    display: inline-block;
    border: none;
    background: transparent;
    color: #f54132;
    font-size: 16px;
    padding: 0;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:disabled {
        color: #777777;
    }
`;

const PrevButton = styled(Button)`
    color: #aaaaaa;
`;

const QnAHeader: React.FC<QnAHeaderProps> = (props) => {
    const { className, onClickPrev, onClickNext } = props;
    return (
        <Wrapper className={className}>
            <PrevButton onClick={onClickPrev}>이전</PrevButton>
            <Button onClick={onClickNext}>선택 완료</Button>
        </Wrapper>
    );
};

export default QnAHeader;
