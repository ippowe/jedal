import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import MainHeader from '../components/MainHeader';
import ProgressBar from '../components/ProgressBar';
import EmptyResult from '../components/EmptyResult';
import SuccessInform from '../components/SuccessInform';

import { RootState } from '../modules/index';

interface Iresult {
    className?: string;
}

const Wrapper = styled.div``;

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
    const [isAnimationProgress, setIsAnimationProgress] = useState(true);
    const [percent, setPercent] = useState(0);
    let redirectTimeoutId: number;
    const suggestions = useSelector(({ suggestion }: RootState) => suggestion.suggestions);

    const [hasRecommends, setHasRecommends] = useState(false);

    useEffect(() => {
        setPercent(100);
    }, []);

    useEffect(() => {
        return (): void => {
            if (redirectTimeoutId) {
                clearTimeout(redirectTimeoutId);
            }
        };
    }, []);

    useEffect(() => {
        const hasRecommends = suggestions.length > 0;
        setHasRecommends(hasRecommends);
    }, [suggestions]);

    const handleRestLoading = (ds: { width: string }): void => {
        const { width } = ds;
        if (width === '100%') {
            setIsAnimationProgress(false);
        }
    };

    return (
        <Wrapper className={className}>
            {isAnimationProgress ? (
                <LoadingContainer>
                    <LoadingBar percent={percent} duration={500} onRest={handleRestLoading} />
                </LoadingContainer>
            ) : hasRecommends ? (
                <SuccessInform />
            ) : (
                <>
                    <MainHeader />
                    <EmptyResult />
                </>
            )}
        </Wrapper>
    );
};

export default result;
