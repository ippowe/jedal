import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Router, { useRouter } from 'next/router';

import MainHeader from '../components/MainHeader';
import Tab from '../components/Tab';
import Ingredients from '../components/Ingredients';
import CookingTips from '../components/CookingTips';
import Recipes from '../components/Recipes';
import Button from '../components/Button';
import SearchOnWeb from '../components/SearchOnWeb';

import { RootState } from '../modules';

interface Isuggestion {
    className?: string;
}

const Wrapper = styled.div`
    margin-bottom: 50px;
`;

const SubHeader = styled.div`
    margin-top: 32px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #aaafbd;
    text-align: center;
`;

const FoodImageWrapper = styled.div`
    background-image: url('../images/food-image-window.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 292px;
    height: 274px;
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
`;

const FoodImage = styled.img`
    display: block;
    margin: 0 auto;
    padding: 27px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;

const Name = styled.div`
    font-size: 28px;
    font-weight: bold;
    line-height: 1.21;
    text-align: center;
    color: #333740;
    margin-bottom: 10px;
`;

const SeasonIngredient = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    text-align: center;
    color: #333740;
    margin-bottom: 16px;
`;

const Summary = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.43;
    text-align: center;
    color: #333740;
    margin: 0 25px;
    margin-bottom: 30px;
    word-break: keep-all;
`;

const StyledButton = styled(Button)`
    box-shadow: none;
    border-radius: 0;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    max-width: 540px;
    margin: 0 auto;
    height: 50px;
    background-color: #f54131;
    color: #ffffff;
`;

const getToday = (): string => {
    return moment().format('M[월] D[일]');
};

const TABS = ['상세정보', '조리방법'];

const Detail: React.FC<Isuggestion> = (props) => {
    const { className } = props;
    const { season = '봄' } = useSelector(({ answer }: RootState) => answer);
    const { recipeId } = useRouter().query;
    const suggestion = useSelector(({ suggestion }: RootState) => {
        if (isNaN(+recipeId) || Array.isArray(recipeId)) return null;
        const suggestions = suggestion.suggestions;
        return suggestions.find((suggestion) => suggestion.recipeId === +recipeId);
    });
    const [selectedTab, setSelectedTab] = useState(TABS[1]);
    const today = getToday();

    useEffect(() => {
        //TODO 이 부분을 detail 정보가 없으면 불러오는 것으로 변경해야 할 듯..?
        if (typeof recipeId !== 'string' || _.isEmpty(suggestion)) {
            Router.push('/');
        }
    }, [recipeId, suggestion]);

    const handleClickTab = (tab: string): void => {
        setSelectedTab(tab);
    };

    const renderTabContents = (tab: string): JSX.Element => {
        if (!suggestion) return;
        const { seasonIngredients, recipe, ingredients, recipeName, cookingTime } = suggestion;
        const tips = seasonIngredients.map((ingredient) => ({
            name: ingredient.name,
            tip: ingredient.cookingTip,
        }));

        switch (tab) {
            case TABS[0]: {
                return (
                    <div>
                        <Ingredients amount={recipe.amount} ingredients={ingredients} />
                        <CookingTips cookingTips={tips} />
                    </div>
                );
            }
            case TABS[1]: {
                return (
                    <div>
                        <Recipes recipes={recipe.detailRecipes} cookingTime={cookingTime} />
                        <SearchOnWeb keyword={recipeName} />
                    </div>
                );
            }
            default: {
                throw new Error(`Inavlid Tab: ${tab}`);
            }
        }
    };

    return (
        <Wrapper className={className}>
            <MainHeader />
            <SubHeader>{`${today} 오늘의 수라 추천 ${season} 요리`}</SubHeader>
            <FoodImageWrapper>
                <FoodImage src={suggestion?.recipe.imgUrl} />
            </FoodImageWrapper>
            <Name>{suggestion?.recipeName}</Name>
            <SeasonIngredient>제철재료 | {suggestion?.seasonIngredients[0].name}</SeasonIngredient>
            <Summary>{suggestion?.recipe?.summary}</Summary>
            <Tab tabs={TABS} onClickTab={handleClickTab} selectedTab={selectedTab}>
                {renderTabContents(selectedTab)}
            </Tab>
            <StyledButton theme="primary">오늘의 수라 알리기</StyledButton>
        </Wrapper>
    );
};

export default Detail;