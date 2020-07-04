import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import LastRecommendContent from '../components/LastRecommendContent';
import { useRouter } from 'next/router';
import EmptyImage from '../../public/images/빈그릇.svg';
import Button from '../components/Button';
import moment from 'moment';
import { get, isEmpty, map, isNil } from 'lodash';
import { gql } from 'apollo-boost';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Link from 'next/link';

const EmptyContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const EmptyRecommendDescription = styled.div`
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    padding-top: 23.7px;
    padding-bottom: 38px;
`;
const EmptyIcon = styled(EmptyImage)`
    padding-top: 148.2px;
    overflow: visible;
`;
const LastRecommendList = styled.div`
    text-align: left;
    padding: 20px 27px;
`;
const DateWrapper = styled.div`
    div {
        display: inline-block;
    }
    .title {
        font-size: 11px;
        font-weight: bold;
        line-height: 1.09;
        text-align: left;
        color: #333740;
    }

    .date {
        padding-left: 10.8px;
        font-size: 11px;
        font-weight: 500;
        line-height: 1.09;
        text-align: left;
        color: #7b818f;
    }
`;
const LastRecommendResultTitle = styled.div`
    margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
    line-height: 0.8;
    text-align: left;
    color: #7b818f;

    span {
        color: #333740;
    }
`;
const LastRecommendItemWrapper = styled.div`
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
`;
const LastRecommendItem = styled.div`
    margin-bottom: 20px;
    margin-right: 10px;
`;
const ItemImage = styled.img`
    width: 95px;
    height: 95px;
    border-radius: 10px;
    background-color: #7b818f;
    object-fit: cover;
`;
const ItemTitle = styled.div`
    width: 95px;
    height: 33px;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.25;
    text-align: left;
    color: #000000;
`;
const Divider = styled.div`
    border: 0.5px solid #6f6f6f;
`;

const GET_HISTORIES = gql`
    query getHistories($userId: String!) {
        user(userId: $userId) {
            histories {
                createdAt
                searchedRecipes {
                    recipeId
                    recipeName
                    recipe {
                        imgUrl
                    }
                }
            }
        }
    }
`;

const LastRecommend: React.FC<{}> = () => {
    const router = useRouter();
    const user = useSelector(({ user }: RootState) => user);
    const [getHistories, { loading, data }] = useLazyQuery(GET_HISTORIES, {
        variables: {
            userId: user._id,
        },
        onCompleted: (data) => {},
    });

    useEffect(() => {
        if (isNil(user) === false) {
            getHistories();
        }
    }, [user]);

    const onClickFoodRecipeRecommend = () => {
        router.push('/guide1');
    };

    return (
        <>
            <MainHeader />
            <LastRecommendContent>
                {isEmpty(data?.user?.histories) === true && loading === false ? (
                    <EmptyContent>
                        <EmptyIcon />
                        <EmptyRecommendDescription>
                            추천 받은 제철 요리가 없습니다.
                            <br />
                            지금 바로 제철 요리를 추천 받아보세요.
                        </EmptyRecommendDescription>
                        <Button variant="primary" onClick={onClickFoodRecipeRecommend} width="320px">
                            제철 요리 추천 받기
                        </Button>
                    </EmptyContent>
                ) : (
                    <>
                        {map(data?.user?.histories, (history, historyIndex) => {
                            const formattedKey = moment(history.createdAt).format('YYYY.MM.DD');
                            const searchedRecipes = get(history, 'searchedRecipes');

                            return (
                                <LastRecommendList key={historyIndex}>
                                    <DateWrapper>
                                        <div className="title">추천일</div>
                                        <div className="date">{formattedKey}</div>
                                    </DateWrapper>
                                    <LastRecommendResultTitle>
                                        총 <span>{searchedRecipes.length}</span>개의 추천결과
                                    </LastRecommendResultTitle>
                                    <LastRecommendItemWrapper>
                                        {map(searchedRecipes, (item, itemIndex) => {
                                            return (
                                                <Link href={`detail/${item?.recipeId}`} key={item.recipeId}>
                                                    <LastRecommendItem>
                                                        <ItemImage src={item.recipe.imgUrl}></ItemImage>
                                                        <ItemTitle>{item.recipeName}</ItemTitle>
                                                    </LastRecommendItem>
                                                </Link>
                                            );
                                        })}
                                    </LastRecommendItemWrapper>
                                    <Divider />
                                </LastRecommendList>
                            );
                        })}
                    </>
                )}
            </LastRecommendContent>
        </>
    );
};

export default LastRecommend;
