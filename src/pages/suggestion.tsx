import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Isuggestion {
    className?: string;
}

const Wrapper = styled.div``;
const suggestion: React.FC<Isuggestion> = (props) => {
    const { className } = props;
    return (
        <Wrapper className={className}>
            <Link href="/detail?recipe=0">제료 상세정보페이지로 이동</Link>
        </Wrapper>
    );
};

export default suggestion;
