import React, { useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

interface IProgressBar {
    className?: string;
    percent?: number;
    duration?: number;
    onRest?: (ds: Partial<{ width: string }>) => void;
    onStart?: () => void;
}

const Wrapper = styled.div`
    position: relative;
    background-color: #e8e8e8;
`;
2;
const Bar = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #f54132;
`;

const ProgressBar: React.FC<IProgressBar> = (props) => {
    const { className, percent = 0, duration = 300, onRest, onStart } = props;
    const [animationProps, set] = useSpring(() => ({
        width: '0%',
        config: { duration },
        onRest: onRest,
        onStart: onStart,
    }));

    useEffect(() => {
        set({ width: `${percent}%` });
    }, [percent]);

    return (
        <Wrapper className={className}>
            <Bar style={animationProps} />
        </Wrapper>
    );
};

export default ProgressBar;
