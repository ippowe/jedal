import React from 'react';
import styled from 'styled-components';

interface ISelectButton {
    className?: string;
    option: OptionType;
    onClick: (value: string) => void;
    value: string;
    isSelect?: boolean;
}

export type OptionType = string | string[] | { default: string; emphasis: string };

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

const parseArrayOption = (prev, value, index, option): React.ReactNode => {
    if (option.length - 1 === index) {
        prev.push(value);
    } else {
        prev.push(value, <br key={value + index} />);
    }
    return prev;
};

const parseObjectOption = (option): React.ReactNode => {
    const keys = Object.keys(option);
    return keys.map((key) => {
        switch (key) {
            case 'normal': {
                return option[key];
            }
            case 'emphasis': {
                return <strong key={key + option[key]}>{option[key]}</strong>;
            }
            default: {
                throw new Error('Invalid Option Type');
            }
        }
    });
};

const parseOption = (option: OptionType): React.ReactNode => {
    if (typeof option === 'string') {
        return option;
    } else if (option instanceof Array) {
        return option.reduce(parseArrayOption, []);
    } else {
        return parseObjectOption(option);
    }
};

const SelectButton: React.FC<ISelectButton> = (props) => {
    const { className, option, onClick, isSelect, value } = props;
    return (
        <Wrapper
            className={isSelect ? 'select-button__selected ' + className : className}
            onClick={(): void => onClick(value)}
        >
            <Label>{parseOption(option)}</Label>
        </Wrapper>
    );
};

export default SelectButton;
