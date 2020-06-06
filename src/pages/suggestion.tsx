import React from 'react';
import styled from 'styled-components';

interface Isuggestion {
    className?: string;
}

const suggestion: React.FC<Isuggestion> = (props) => {
    const { className } = props;
    return <Wrapper className={className}>추천 결과 페이지</Wrapper>;
};

export default suggestion;

const Wrapper = styled.div``;
