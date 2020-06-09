import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { RootState } from '../modules';

interface Isuggestion {
    className?: string;
}

const Wrapper = styled.div``;
const suggestion: React.FC<Isuggestion> = (props) => {
    const { className } = props;
    const { recipeId } = useSelector(({ suggestion }: RootState) => suggestion[0]);
    return (
        <Wrapper className={className}>
            <Link href={`/detail/${recipeId}`}>제료 상세정보페이지로 이동</Link>
        </Wrapper>
    );
};

export default suggestion;
