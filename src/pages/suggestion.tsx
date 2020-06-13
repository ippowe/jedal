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
    const suggestion = useSelector(({ suggestion }: RootState) => suggestion.suggestions[0]);

    return (
        <Wrapper className={className}>
            <Link href={`/detail/?recipeId=${suggestion?.recipeId}`} as={`detail/${suggestion?.recipeId}`}>
                <a>재료 상세정보페이지로 이동</a>
            </Link>
        </Wrapper>
    );
};

export default suggestion;
