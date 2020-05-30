import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import MainHeader from '../components/MainHeader';
import ProgressBar from '../components/ProgressBar';
import EmptyResult from '../components/EmptyResult';

interface Iresult {
    className?: string;
}

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    align-items: center;
`;

const LoadingBar = styled(ProgressBar)`
    height: 8px;
    width: calc(100% - 72px);
    border-radius: 30px;
    margin: 0 auto;
    background-color: #f8f9f5;
    > div {
        border-radius: 30px;
    }
`;

const result: React.FC<Iresult> = (props) => {
    const { className } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [percent, setPercent] = useState(0);
    const recipes = useSelector(({}) => null);
    const router = useRouter();

    useEffect(() => {
        if (isLoading) {
            return;
        } else {
            if (!!recipes && recipes.length > 0) {
                router.push('/recipes');
            } else {
                return;
            }
        }
    }, [isLoading, recipes]);

    return (
        <Wrapper className={className}>
            {isLoading ? (
                <LoadingContainer>
                    <LoadingBar percent={percent} />
                </LoadingContainer>
            ) : !recipes || recipes.length === 0 ? (
                <>
                    <MainHeader />
                    <EmptyResult />
                </>
            ) : null}
        </Wrapper>
    );
};

export default result;

const Wrapper = styled.div``;
