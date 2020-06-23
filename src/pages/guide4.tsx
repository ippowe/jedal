import React from 'react';
import styled, { keyframes } from 'styled-components';
import MainHeader from '../components/MainHeader';
import Scenery from '../../public/images/scenery2.svg';
import WomanBig from '../../public/images/womanBig.svg';
import Button from '../components/Button';
import Cloud from '../components/Cloud';
import { useRouter } from 'next/router';
import useSurvey from '../hooks/useSurvey';

const Container = styled.div`
    background: no-repeat center url('../../public/images/back_pattern@2x.png');
    background-size: cover;
`;
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

const StyledPath1 = styled.path`
    fill: #fff;
`;

const StyledPath2 = styled.path`
    fill: #313131;
`;

const nod = keyframes`
    0% {
        transform: translateX(-50%) translateY(3px);
    }
    100%{
        transform: translateX(-50%) translateY(5px);
    }
`;

const StyledSvg = styled.svg`
    animation: ${nod} 1s ease-in infinite;
    animation-direction: normal;
    position: absolute;
    left: 50%;
`;

const Guide4: React.FC<{}> = () => {
    const onClickSurvey = useSurvey();
    const router = useRouter();
    const onClickStart = () => {
        router.push('/qna');
    };

    const onClickWoman = () => {
        onClickSurvey();
    };

    return (
        <Container>
            <MainHeader />
            <Description>이제 나장금이 몇가지 질문을 드립니다.</Description>
            <Title>
                대답을 선택하여
                <br />
                추천 제철요리를 확인하세요.
            </Title>
            <ImageWrapper>
                <Cloud />
                <StyledSvg width="125.52" height="241.466" viewBox="0 0 125.52 241.466">
                    <StyledPath1
                        id="패스_192"
                        d="M2827.651,3167.984a17.231,17.231,0,0,0,17.175-16.225,9.431,9.431,0,0,1-3.011-6.895,9.292,9.292,0,0,1,.458-2.763,11.2,11.2,0,0,1-9.2-5.438,12.283,12.283,0,0,1-10.842,0,11.115,11.115,0,0,1-9.2,5.441,9.165,9.165,0,0,1-2.555,9.657A17.235,17.235,0,0,0,2827.651,3167.984Z"
                        transform="translate(-2764.891 -3112.501)"
                    />
                    <StyledPath2
                        id="패스_197"
                        d="M2813.791,3169.168a9.1,9.1,0,0,0,1.54-.156,22.37,22.37,0,0,0,44.219,0,9.13,9.13,0,0,0,1.542.156,9.469,9.469,0,0,0,1.536-18.815,11.144,11.144,0,0,0-10.18-15.783,11.251,11.251,0,0,0-3.3.517,2.057,2.057,0,0,1,.177.561c-.068-.184-.1-.382-.177-.561a12.708,12.708,0,0,0-23.415,0c-.064.155-.093.331-.15.489a1.955,1.955,0,0,1,.15-.489,11.144,11.144,0,0,0-13.48,15.269,9.469,9.469,0,0,0,1.539,18.815Zm9.487-9.484a9.406,9.406,0,0,0-.458-2.763,11.113,11.113,0,0,0,9.2-5.441,2.118,2.118,0,0,1-.5-.307c.173.093.323.222.5.307a12.281,12.281,0,0,0,10.842,0c.194-.093.357-.232.549-.336a2.091,2.091,0,0,1-.549.336,11.2,11.2,0,0,0,9.2,5.438,9.294,9.294,0,0,0-.457,2.763,9.431,9.431,0,0,0,3.011,6.895,17.2,17.2,0,0,1-34.353,0A9.435,9.435,0,0,0,2823.278,3159.685Z"
                        transform="translate(-2774.681 -3127.322)"
                    />
                </StyledSvg>
                <StyledScenery />
                <StyledWomanBig onClick={onClickWoman} />
            </ImageWrapper>
            <ButtonWrapper>
                <Button variant="primary" size="big" width="320px" onClick={onClickStart}>
                    시작하기
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default Guide4;
