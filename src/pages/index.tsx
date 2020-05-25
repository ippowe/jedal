import React from 'react';
import styled, { css } from 'styled-components';
import MainHeader from '../components/MainHeader';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const Content = styled.div`
    height: 450px;
`;

const Footer = styled.div`
    position: relative;
    min-height: calc(100vh - 495px);
    background-color: ${(props) => props.theme.secondary};
    display: flex;
    justify-content: center;
`;

const ButtonWrapper = styled.div`
    transform: translateY(-20px);
`;

const ButtonCss = css`
    margin-top: 10px;
`;

const Index: React.FC<{}> = () => {
    const router = useRouter();
    const onClickFoodRecipeRecommend = () => {
        router.push('/guide1');
    };

    return (
        <>
            <MainHeader />
            <Content />
            <Footer>
                <ButtonWrapper>
                    <Button variant="primary" onClick={onClickFoodRecipeRecommend}>
                        제철 요리 추천받기
                    </Button>
                    <Button variant="standard" buttonCss={ButtonCss}>
                        지난 추천 요리 보기
                    </Button>
                    <Button variant="standard" buttonCss={ButtonCss}>
                        장보기 노트 보기
                    </Button>
                </ButtonWrapper>
            </Footer>
        </>
    );
};

export default Index;
