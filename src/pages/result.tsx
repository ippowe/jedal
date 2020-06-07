import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
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
    query getSuggestions($season: String, $categories: [String!], $level: String, $hateIngredients: [String!]) {
        trimmedRecipes(categories: $categories, level: $level, hateIngredients: $hateIngredients) {
            recipeName
            cookingTime
            cookingLevel
            ingredientCategory
            recipe {
                summary
                amount
                detailRecipes {
                    recipeId
                    tip
                    step
                    text
                }
            }
            seasonIngredients(season: $season) {
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
    const answer = useSelector(({ answer }: RootState) => answer);
    const { loading, data } = useQuery(GET_SUGGESTIONS, {
        variables: {
            ...answer,
        },
        onCompleted: (data) => {
            if (data.trimmedRecipes?.length === 0) {
                dispatch(setSuggestion(data.trimmedRecipes));
                router.push('/suggestion');
            }
        },
        onError: console.error,
    });
    const [hasRecommands, setHasRecommands] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const hasRecommands = data?.trimmedRecipes?.length === 0;
        setHasRecommands(hasRecommands);
    }, [data]);

    const handleRestLoading = (): void => {
        if (loading) return;
        setIsAnimationProgress(false);
    };

    return (
        <Wrapper className={className}>
            {isAnimationProgress ? (
                <LoadingContainer>
                    <LoadingBar percent={100} duration={700} onRest={handleRestLoading} />
                </LoadingContainer>
            ) : hasRecommands ? (
                <>
                    <MainHeader />
                    <EmptyResult />
                </>
            ) : (
                <SuccessInform />
            )}
        </Wrapper>
    );
};

export default result;
