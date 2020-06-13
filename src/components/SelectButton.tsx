import React from 'react';
import styled from 'styled-components';
import DecoratedPhrase from './DecoratedPhrase';
import Button from './Button';
interface ISelectButton {
    className?: string;
    option: OptionType;
    onClick: (value: string) => void;
    value: string;
    isSelect?: boolean;
}

export type OptionType = string | string[] | { label: string; value: string };

const Wrapper = styled(Button)`
    border: 1px solid #e1e4eb;
    box-shadow: none;
    transition: all 300ms ease-out;
    height: 82px;
    cursor: pointer;

    &.select-button__selected {
        background-color: #303b57;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

        > div {
            color: #ffffff;
        }
    }
`;

const Label = styled(DecoratedPhrase)`
    font-size: 16px;
    line-height: 22px;
    word-break: keep-all;
    color: #707070;
    transition: coloor 300ms ease-out;

    > b {
        display: block;
        font-weight: normal;
        font-size: 18px;
    }
`;

const parseOptionArray = (prev, value, index, option: string[]): React.ReactNode => {
    if (index < option.length - 1) {
        prev.push(value, <br key={value + '-line-break'} />);
    } else {
        prev.push(value);
    }
    return prev;
};

const parseLabel = (option: OptionType): string => {
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
            <Label phrase={parseLabel(option)} />
        </Wrapper>
    );
};

export default SelectButton;
