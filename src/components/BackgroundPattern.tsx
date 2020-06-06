import React from 'react';
import styled from 'styled-components';

import Pattern from '../../public/images/background_pattern.svg';

interface IBackgroundPattern {
    className?: string;
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: 300px;
    grid-gap: 82px;
`;

const StyledParttern = styled(Pattern)`
    width: 100%;
    height: 100%;
`;

const BackgroundPattern: React.FC<IBackgroundPattern> = (props) => {
    const { className } = props;

    return (
        <Wrapper className={className}>
            <StyledParttern />
            <StyledParttern />
            <StyledParttern />
        </Wrapper>
    );
};

export default BackgroundPattern;
