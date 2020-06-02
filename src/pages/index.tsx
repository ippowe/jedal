import React from 'react';
import styled, { css } from 'styled-components';
import MainHeader from '../components/MainHeader';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import TreeFront from '../../public/images/mainTreeFront.svg';
import TreeLeftback from '../../public/images/mainTreeLeftback.svg';
import Shop from '../../public/images/mainShop.svg';
import TreeRightback from '../../public/images/mainTreeRightback.svg';

const Content = styled.div`
    height: 450px;
`;

const Footer = styled.div`
    position: relative;
    min-height: calc(100vh - 495px);
    background-color: ${(props) => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ButtonWrapper = styled.div`
    transform: translateY(-20px);
`;

const ButtonCss = css`
    margin-top: 10px;
`;

const MainImageWrapper = styled.div`
    overflow: hidden;
    position: relative;
    height: 274px;
`;

const StyledTreeFront = styled(TreeFront)`
    position: absolute;
    bottom: -10px;
    left: -23px;
    z-index: 1;
`;

const StyledTreeLeftback = styled(TreeLeftback)`
    position: absolute;
    bottom: 40px;
    left: -65px;
`;

const StyledTreeRightback = styled(TreeRightback)`
    position: absolute;
    bottom: 40px;
    right: -45px;
`;

const StyledShop = styled(Shop)`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
`;

const Title = styled.div`
    font-size: 26px;
    font-weight: bold;
    line-height: 1.15;
    color: #000000;
    margin-left: 27px;
`;

const TitleWord = styled.span`
    color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0.16px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 27px;
`;

const CopyRights = styled.div`
    font-size: 10px;
    font-weight: 300;
    line-height: 1.5;
    color: #ffffff;
    transform: scale(0.8);
    align-self: flex-end;
    padding-bottom: 61px;
`;

const Index: React.FC<{}> = () => {
    const router = useRouter();
    const onClickFoodRecipeRecommend = () => {
        router.push('/guide1');
    };
    const onClickLastRecommend = () => {
        router.push('/last-recommend');
    };

    return (
        <>
            <MainHeader />
            <Content>
                <MainImageWrapper>
                    <StyledTreeFront />
                    <StyledTreeLeftback />
                    <StyledTreeRightback />
                    <StyledShop />
                </MainImageWrapper>
                <Title>
                    추천하는 <TitleWord>제철 요리</TitleWord>를<br />
                    나의 수라상에 올려보세요
                </Title>
                <SubTitle>
                    수라간 최고상궁을 지낸 나장금이
                    <br />
                    제철 요리를 추천해드립니다.
                </SubTitle>
            </Content>
            <Footer>
                <ButtonWrapper>
                    <Button variant="primary" onClick={onClickFoodRecipeRecommend} width="240px">
                        제철 요리 추천받기
                    </Button>
                    <Button variant="standard" onClick={onClickLastRecommend} buttonCss={ButtonCss} width="240px">
                        지난 추천 요리 보기
                    </Button>
                    <Button variant="standard" buttonCss={ButtonCss} width="240px">
                        장보기 노트 보기
                    </Button>
                </ButtonWrapper>
                <CopyRights>Copyrightsⓒ All rights. SteelHungry</CopyRights>
            </Footer>
        </>
    );
};

export default Index;
