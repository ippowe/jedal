import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import LastRecommendContent from "../components/LastRecommendContent";
import { useRouter } from "next/router";
import EmptyImage from "../../public/images/빈그릇.svg";
import Button from "../components/Button";
import storage from "../utils/storage";
import moment from "moment";
import { get, isEmpty, keys, map } from "lodash";

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

//TODO: 테스트 데이터. 실제 스토리지 데이터로 변경 해야 함
storage.setItem("LAST_RECOMMEND_ITEMS", {
  "2020.05.20": [{
    image: "/images/sample-recommend-food-image.png",
    title: "정말맛있는해물순두부찌개"
  }, {
    image: "/images/sample-recommend-food-image.png",
    title: "콩비지동그랑땡"
  }, {
    image: "/images/sample-recommend-food-image.png",
    title: "누드김밥"
  }, {
    image: "/images/sample-recommend-food-image.png",
    title: "미소된장국"
  }],
  "2020.05.12": [{
    image: "/images/sample-recommend-food-image.png",
    title: "누드김밥"
  }, {
    image: "/images/sample-recommend-food-image.png",
    title: "해물순두부찌개"
  }],
  "2020.05.02": [{
    image: "/images/sample-recommend-food-image.png",
    title: "5월 누드김밥 #1"
  }, {
    image: "/images/sample-recommend-food-image.png",
    title: "5월 누드김밥 #2"
  }],
  "2020.06.02": [{
    image: "/images/sample-recommend-food-image.png",
    title: "6월 누드김밥 #1"
  }, {
    image: "/images/sample-recommend-food-image.png",
    title: "6월 누드김밥 #2"
  }]
});

const LastRecommend: React.FC<{}> = () => {
  const router = useRouter();
  const onClickFoodRecipeRecommend = () => {
    router.push("/guide1");
  };
  const lastRecommendItems = storage.getItem("LAST_RECOMMEND_ITEMS");
  const sortKeys = map(keys(lastRecommendItems), date => moment(date, "YYYY.MM.DD")).sort((p, c) => c.diff(p));

  return (
    <>
      <MainHeader/>
      <LastRecommendContent>
        {isEmpty(lastRecommendItems) === true ? <EmptyContent>
            <EmptyIcon/>
            <EmptyRecommendDescription>
              추천 받은 제철 요리가 없습니다.
              <br/>
              지금 바로 제철 요리를 추천 받아보세요.
            </EmptyRecommendDescription>
            <Button variant="primary" onClick={onClickFoodRecipeRecommend} width="320px">
              제철 요리 추천 받기
            </Button>
          </EmptyContent> :
          <>
            {map(sortKeys, key => {
              const formattedKey = key.format("YYYY.MM.DD");
              const sortingItems = get(lastRecommendItems, key.format("YYYY.MM.DD"));

              return (
                <LastRecommendList>
                  <DateWrapper>
                    <div className="title">추천일</div>
                    <div className="date">{formattedKey}</div>
                  </DateWrapper>
                  <LastRecommendResultTitle>총 <span>{sortingItems.length}</span>개의 추천결과</LastRecommendResultTitle>
                  <LastRecommendItemWrapper>
                    {
                      map(sortingItems, (item, itemIndex) => {
                        return (
                          <LastRecommendItem key={itemIndex}>
                            <ItemImage src={item.image}></ItemImage>
                            <ItemTitle>{item.title}</ItemTitle>
                          </LastRecommendItem>
                        );
                      })
                    }
                  </LastRecommendItemWrapper>
                  <Divider/>
                </LastRecommendList>
              );
            })}
          </>
        }
      </LastRecommendContent>
    </>
  );
};

export default LastRecommend;
