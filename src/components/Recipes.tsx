import React from 'react';
import styled from 'styled-components';

import { ISuggestionState } from '../modules/suggestion';

interface IRecipes {
    className?: string;
    recipes: ISuggestionState['recipe']['detailRecipes'];
    cookingTime: string;
}

const Wrapper = styled.div`
    padding: 30px 26px;
    background-color: #f4f5f8;
    margin-bottom: 10px;
`;

const Time = styled.span`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.19;
    letter-spacing: normal;
    color: #535966;
    position: relative;

    &:after {
        content: ' ';
        height: 5px;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #f54131;
        opacity: 0.4;
    }
`;

const Recipe = styled.div`
    display: flex;
    padding-top: 16px;
    border-top: solid 1px #dcdee6;
    margin-top: 16px;
`;
const Step = styled.span`
    /* font-family: NotoSansCJKkr; */
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #333740;
    margin-right: 18px;
    word-break: keep-all;
`;
const Text = styled.div`
    /* font-family: NotoSansCJKkr; */
    font-size: 14px;
    font-weight: 300;
    line-height: 1.57;
    color: #333740;
`;

const Recipes: React.FC<IRecipes> = (props) => {
    const { className, recipes, cookingTime } = props;
    return (
        <Wrapper className={className}>
            <Time>예상 조리시간: {cookingTime}</Time>
            {recipes.map((recipe) => (
                <Recipe key={recipe.recipeId + recipe.step}>
                    <Step>{recipe.step}단계</Step>
                    <Text>{recipe.text}</Text>
                </Recipe>
            ))}
        </Wrapper>
    );
};

export default Recipes;
