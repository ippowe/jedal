import React from 'react';
import styled from 'styled-components';

interface ISelectContainer {
    className?: string;
}

const Wrapper = styled.div<{ numberOfChildren: number }>`
    display: grid;
    box-sizing: border-box;
    grid-auto-columns: 1fr;
    grid-auto-rows: 82px;
    grid-gap: 7px;
    width: 100%;

    ${({ numberOfChildren }): string => {
        if (numberOfChildren > 4) {
            return `
            grid-template-columns: ${numberOfChildren % 2 !== 0 ? '1fr' : '1fr 1fr'};
            grid-gap: 10px;
            ${numberOfChildren % 2 !== 0 ? '>:last-child {grid-column-start:1; grid-column-end: last-line}' : ''}
            `;
        } else {
            return;
        }
    }}
`;

const getNumberOfChildren = (children: React.ReactNode): number => {
    if (children instanceof Array) {
        return React.Children.count(children.filter((child) => !!child));
    } else {
        return 1;
    }
};

const SelectContainer: React.FC<ISelectContainer> = (props) => {
    const { className, children } = props;
    const numberOfChildren = getNumberOfChildren(children);

    return (
        <Wrapper className={className} numberOfChildren={numberOfChildren}>
            {children}
        </Wrapper>
    );
};

export default SelectContainer;
