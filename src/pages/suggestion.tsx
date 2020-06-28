import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Button from '../components/Button';
import MainHeader from '../components/MainHeader';
import { get, map } from 'lodash';
import { ISuggestion } from '../modules/suggestion';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Isuggestion {
    className?: string;
}

const ResultTitle = styled.div`
    margin-top: 32px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #aaafbd;
    text-align: center;
`;
const ResultSubTitle = styled.div`
    margin-top: 10px;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.13;
    color: #333740;
    text-align: center;
    white-space: pre;
`;
const SuggestionContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 78px;
`;
const SuggestionList = styled.div``;
const SuggestionItem = styled.div`
    width: 320px;
    margin-bottom: 30px;
    box-shadow: 10px 10px 26px 0 rgba(0, 0, 0, 0.08);
    border: solid 2px #c5cbde;
    margin-top: 86px;
    border-radius: 10px;
`;
const FoodWrapper = styled.div`
    transform: translateY(-56px);
`;
const FoodImage = styled.img`
    display: block;
    margin: 0 auto;
    width: 240px;
    height: 170px;
    margin-bottom: 17px;
    border-radius: 10px;
    object-fit: cover;
`;
const FoodTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    line-height: 1.21;
    text-align: center;
    color: #333740;
    margin-bottom: 6px;
`;

const FoodSeasonIngredient = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    text-align: center;
    color: #333740;
    margin-bottom: 14px;
`;

const FoodSummary = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.43;
    text-align: center;
    color: #525966;
    margin: 0 25px;
    margin-bottom: -20px;
    word-break: keep-all;
`;
const Wrapper = styled.div``;
const suggestion: React.FC<Isuggestion> = (props) => {
    const router = useRouter();
    const { className } = props;
    const suggestions = useSelector(({ suggestion }: RootState) => suggestion.suggestions);
    const { season } = useSelector(({ answer }: RootState) => answer);
    const handleClickRestart = (): void => {
        router.push('/guide4');
    };

    return (
        <Wrapper className={className}>
            <MainHeader />
            <ResultTitle>{`총 ${suggestions.length}개의 추천결과`}</ResultTitle>
            <ResultSubTitle>{`나의 수라상에\n올릴 요리`}</ResultSubTitle>
            <SuggestionContent>
                <SuggestionList>
                    {map(suggestions, (suggestion: ISuggestion) => {
                        return (
                            <Link href="detail/[id]" as={`detail/${suggestion?.recipeId}`} key={suggestion.recipeId}>
                                <SuggestionItem>
                                    <FoodWrapper>
                                        <FoodImage src={get(suggestion, 'recipe.imgUrl', '')} />
                                        <FoodTitle>{get(suggestion, 'recipeName')}</FoodTitle>
                                        <FoodSeasonIngredient>
                                            제철재료 | {get(suggestion, 'seasonIngredients.0.name', '')}
                                        </FoodSeasonIngredient>
                                        <FoodSummary>{get(suggestion, 'recipe.summary')}</FoodSummary>
                                    </FoodWrapper>
                                </SuggestionItem>
                            </Link>
                        );
                    })}
                </SuggestionList>

                <Button variant="primary" width="320px" onClick={handleClickRestart}>
                    다시 추천 받기
                </Button>
            </SuggestionContent>
        </Wrapper>
    );
};

export default suggestion;
