import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import MainHeader from '../components/MainHeader';
import ProgressBar from '../components/ProgressBar';
import EmptyResult from '../components/EmptyResult';
import SuccessInform from '../components/SuccessInform';

import { RootState } from '../modules/index';
import { setSuggestion } from '../modules/suggestion';

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

const GET_SUGGESTIONS = gql`
    query getSuggestions($seasons: [String!], $categories: [String!], $level: String, $hateIngredients: [String!]) {
        trimmedRecipes(seasons: $seasons, categories: $categories, level: $level, hateIngredients: $hateIngredients) {
            recipeId
            recipeName
            cookingTime
            cookingLevel
            ingredientCategory
            recipe {
                summary
                amount
                imgUrl
                detailRecipes {
                    recipeId
                    tip
                    step
                    text
                }
            }
            seasonIngredients {
                category
                name
                month
                cookingTip
                purchaseTip
            }
            ingredients {
                step
                name
                amount
                type
            }
        }
    }
`;

const result: React.FC<Iresult> = (props) => {
    const { className } = props;
    const dispatch = useDispatch();
    const [isAnimationProgress, setIsAnimationProgress] = useState(true);
    const [percent, setPercent] = useState(0);
    const answer = useSelector(({ answer }: RootState) => answer);
    const suggestions = useSelector(({ suggestion }: RootState) => suggestion.suggestions);
    let redirectTimeoutId: number;
    const { loading } = useQuery(GET_SUGGESTIONS, {
        variables: {
            ...answer,
        },
        onCompleted: (data) => {
            if (data.trimmedRecipes?.length !== 0) {
                dispatch(setSuggestion(data.trimmedRecipes));
            } else {
                dispatch(setSuggestion([]));
            }
        },
    });
    const [hasRecommends, setHasRecommends] = useState(false);

    useEffect(() => {
        if (loading) {
            setPercent(50);
        } else {
            setPercent(100);
        }
    }, [loading]);

    useEffect(() => {
        return (): void => {
            if (!redirectTimeoutId) {
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
