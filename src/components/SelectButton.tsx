import React from 'react';
import styled from 'styled-components';

interface ISelectButton {
    className?: string;
    option: OptionType;
    onClick: (value: string) => void;
    value: string;
    isSelect?: boolean;
}

export type OptionType = string | string[] | { label: string; value: string };

const Wrapper = styled.button`
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #e1e4eb;
    transition: background-color 100ms ease;

    &.select-button__selected {
        background-color: #303b57;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
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

    > strong {
        display: block;
        font-weight: normal;
        font-size: 18px;
    }
`;

const parseOptionArray = (prev, value, index, option: string[]): React.ReactNode => {
    if (index < option.length - 1) {
        prev.push(value, <br key={value} />);
    } else {
        prev.push(value);
    }
    return prev;
};

const renderLabel = (option: OptionType): string => {
    if (typeof option === 'string') {
        return option;
    } else if (option instanceof Array) {
        return option.reduce(parseOptionArray, []);
    } else if (!!option?.label) {
        return option.label;
    }
};

const SelectButton: React.FC<ISelectButton> = (props) => {
    const { className, option, onClick, isSelect, value } = props;
    return (
        <Wrapper
            className={isSelect ? 'select-button__selected ' + className : className}
            onClick={(): void => onClick(value)}
        >
            <Label>{renderLabel(option)}</Label>
        </Wrapper>
    );
};

export default SelectButton;
