import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import Scenery from '../../public/images/scenery.svg';
import WomanBig from '../../public/images/womanBig.svg';
import Button from '../components/Button';

const Description = styled.div`
    white-space: pre-line;
    text-align: center;
    line-height: 1.38;
    color: #333740;
    margin-top: 50px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    text-align: center;
    color: #000000;
    margin-top: 35px;
`;

const ImageWrapper = styled.div`
    position: relative;
    height: 242px;
    margin-top: 20px;
`;

const StyledScenery = styled(Scenery)`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
`;

const StyledWomanBig = styled(WomanBig)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const Guide2: React.FC<{}> = () => {
    return (
        <>
            <MainHeader />
            <Description>이제 나장금이 몇가지 질문을 드립니다.</Description>
            <Title>
                대답을 선택하여
                <br />
                추천 제철요리를 확인하세요.
            </Title>
            <ImageWrapper>
                <StyledScenery />
                <StyledWomanBig />
            </ImageWrapper>
            <ButtonWrapper>
                <Button variant="primary" size="big" width="320px">
                    시작하기
                </Button>
            </ButtonWrapper>
        </>
    );
};

export default Guide2;
