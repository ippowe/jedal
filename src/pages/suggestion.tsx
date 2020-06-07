import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import moment from 'moment';

import MainHeader from '../components/MainHeader';
import { RootState } from '../modules';

interface Isuggestion {
    className?: string;
}

const Wrapper = styled.div``;

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
    background-image: url('images/food-image-window.svg');
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
    /* font-family: NotoSansCJKkr; */
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    text-align: center;
    color: #333740;
    margin-bottom: 16px;
`;

const Summary = styled.div`
    /* font-family: NotoSansCJKkr; */
    font-size: 14px;
    font-weight: 300;
    line-height: 1.43;
    text-align: center;
    color: #333740;
    margin: 0 25px;
    margin-bottom: 30px;
    word-break: keep-all;
`;

const getToday = (): string => {
    return moment().format('M[월] D[일]');
};

const suggestion: React.FC<Isuggestion> = (props) => {
    const { className } = props;
    const { season = '봄' } = useSelector(({ answer }: RootState) => answer);
    const { recipeName, seasonIngredients, recipe } = useSelector(({ suggestion }: RootState) => suggestion[0]);

    const today = getToday();
    return (
        <Wrapper className={className}>
            <MainHeader />
            <SubHeader>{`${today} 오늘의 수라 추천 ${season} 요리`}</SubHeader>
            <FoodImageWrapper>
                <FoodImage src="images/sample-recommend-food-image.png" />
            </FoodImageWrapper>
            <Name>{recipeName}</Name>
            <SeasonIngredient>제철재료 | {seasonIngredients[0].name}</SeasonIngredient>
            <Summary>{recipe.summary}</Summary>
        </Wrapper>
    );
};

export default suggestion;
