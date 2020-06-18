import React from 'react';
import styled, { css } from 'styled-components';
import MainHeader from '../components/MainHeader';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import TreeFront from '../../public/images/mainTreeFront.svg';
import TreeLeftback from '../../public/images/mainTreeLeftback.svg';
import Shop from '../../public/images/mainShop.svg';
import TreeRightback from '../../public/images/mainTreeRightback.svg';
import Ink from 'react-ink';

const Content = styled.div`
    height: 435px;
`;

const Footer = styled.div`
    position: relative;
    min-height: calc(100vh - 480px);
    background-color: ${(props) => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: -22.5px;
`;

const ButtonCss = css`
    margin-top: 10px;
    font-weight: 500;
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
    font-family: 'Noto Sans KR', serif;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0.16px;
    color: #bfbfbf;
    margin-top: 10px;
    margin-left: 27px;
`;

const CopyRights = styled.div`
    font-family: 'Noto Sans KR', serif;
    position: absolute;
    right: -30px;
    bottom: -30px;
    font-size: 10px;
    font-weight: 300;
    line-height: 1.5;
    color: #ffffff;
    align-self: flex-end;
`;

const Team = styled.span`
    position: relative;
`;

const Index: React.FC<{}> = () => {
    const router = useRouter();
    const onClickFoodRecipeRecommend = () => {
        router.push('/guide1');
    };
    const onClickLastRecommend = () => {
        router.push('/last-recommend');
    };
    const onClickTeamInfo = () => {
        router.push('/team');
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
                    <Button variant="primary" onClick={onClickFoodRecipeRecommend} width="245px">
                        제철 요리 추천받기
                    </Button>
                    <Button variant="standard" onClick={onClickLastRecommend} css={ButtonCss} width="245px">
                        지난 추천 요리 보기
                    </Button>
                    <CopyRights>
                        Copyrightsⓒ All rights. SteelHungry |{' '}
                        <Team onClick={onClickTeamInfo}>
                            팀원 소개
                            <Ink />
                        </Team>
                    </CopyRights>
                </ButtonWrapper>
            </Footer>
        </>
    );
};

export default Index;
