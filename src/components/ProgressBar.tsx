import React from 'react';
import styled from 'styled-components';

interface IProgressBar {
    className?: string;
    percent?: number;
}

const ProgressBar: React.FC<IProgressBar> = (props) => {
    const { className, percent = 0 } = props;
    return (
        <Wrapper className={className}>
            <Bar percent={percent} />
        </Wrapper>
    );
};

export default ProgressBar;

const Wrapper = styled.div`
    position: relative;
    background-color: #e8e8e8;
`;

const Bar = styled.div<{ percent: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percent }): number => percent}%;
    height: 100%;
    background-color: #f54132;
`;
