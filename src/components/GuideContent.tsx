import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

interface Props {
    description: string;
    children: React.ReactNode;
}

const Container = styled.div`
    position: relative;
    padding-top: 47px;
    height: 363px;
    box-sizing: border-box;
`;
const Description = styled(animated.div)`
    white-space: pre-line;
    text-align: center;
    line-height: 1.38;
    color: #333740;
`;
const GuideContent: React.FC<Props> = ({ description, children }) => {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 300,
        config: { duration: 1500 },
    });
    return (
        <Container>
            <Description style={props}>{description}</Description>
            {children}
        </Container>
    );
};

export default GuideContent;
