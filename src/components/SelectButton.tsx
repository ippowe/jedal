import React from 'react';
import styled from 'styled-components';

interface ISelectButton {
    className?: string;
    option: string;
    onClick: (option: string) => void;
    isSelect?: boolean;
}

const Wrapper = styled.button`
    border-radius: 10px;
    background-color: #ffffff;
    transition: background-color 100ms ease;

    &.select-button__selected {
        background-color: #303b57;
        > p {
            color: #ffffff;
        }
    }

    &:focus {
        outline: none;
    }
`;

const Label = styled.p`
    color: #707070;
    transition: color 100ms ease;
    font-size: 16px;
    line-height: 22px;
    word-break: keep-all;
`;

const SelectButton: React.FC<ISelectButton> = (props) => {
    const { className, option, onClick, isSelect } = props;
    return (
        <Wrapper
            className={isSelect ? 'select-button__selected ' + className : className}
            onClick={(): void => onClick(option)}
        >
            <Label>{option}</Label>
        </Wrapper>
    );
};

export default SelectButton;
