import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import MainHeader from '../components/MainHeader';
import ProgressBar from '../components/ProgressBar';
import EmptyResult from '../components/EmptyResult';

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

const GET_SUGGESTIONS = gql`
    query getSuggestions($season: String, $categories: [String!], $level: String, $hateIngredients: [String!]) {
        trimmedRecipes(categories: $categories, level: $level, hateIngredients: $hateIngredients) {
            recipeName
            cookingTime
            ingredientCategory
            recipe {
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
            # ingredients {
            #     step
            #     name
            #     amount
            #     type
            # }
        }
    }
`;

const result: React.FC<Iresult> = (props) => {
    const { className } = props;
    const [isAnimationProgress, setIsAnimationProgress] = useState(true);
    const answer = useSelector(({ answer }: RootState) => answer);
    const { loading, error, data } = useQuery(GET_SUGGESTIONS, {
        variables: {
            ...answer,
        },
        onCompleted: (data) => console.log(data),
    });
    const [percent, setPercent] = useState(100);
    const router = useRouter();

    useEffect(() => {
        if (loading || !data) {
            return;
        } else {
            const { trimmedRecipes: recipes } = data;
            if (!!recipes && recipes.length > 0) {
                router.push('/suggestion');
            } else {
                return;
            }
        }
    }, [loading, data]);

    const handleRestLoading = (): void => {
        if (loading) return;
        setIsAnimationProgress(false);
    };

    return (
        <Wrapper className={className}>
            {isAnimationProgress ? (
                <LoadingContainer>
                    <LoadingBar percent={percent} duration={700} onRest={handleRestLoading} />
                </LoadingContainer>
            ) : data?.trimmedRecipes?.length === 0 ? (
                <>
                    <MainHeader />
                    <EmptyResult />
                </>
            ) : null}
        </Wrapper>
    );
};

export default result;
