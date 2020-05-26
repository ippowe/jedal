import React from 'react';
import styled from 'styled-components';

interface ISelectContainer {
    className?: string;
}

const Wrapper = styled.div<{ numberOfChild: number }>`
    display: grid;
    box-sizing: border-box;
    grid-auto-columns: 1fr;
    grid-auto-rows: 82px;
    width: 100%;

    ${({ numberOfChild }): string => {
        if (numberOfChild > 4) {
            return `
            grid-template-columns: ${numberOfChild % 2 !== 0 ? '1fr' : '1fr 1fr'};
            grid-gap: 10px;
            ${numberOfChild % 2 !== 0 ? '>:last-child {grid-column-start:1; grid-column-end: last-line}' : ''}
            `;
        } else {
            return;
        }
    }}
`;

const SelectContainer: React.FC<ISelectContainer> = (props) => {
    const { className, children } = props;
    const numberOfChild = React.Children.count(children);

    return (
        <Wrapper className={className} numberOfChild={numberOfChild}>
            {children}
        </Wrapper>
    );
};

export default SelectContainer;
