import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';
import EmptyResult from '../components/EmptyResult';

interface Iresult {
    className?: string;
}

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    align-items: center;
`;

const LoadingBar = styled(ProgressBar)`
    height: 8px;
    width: calc(100% - 72px);
    border-radius: 30px;
    margin: 0 auto;
    background-color: #f8f9f5;
    > div {
        border-radius: 30px;
    }
`;

const result: React.FC<Iresult> = (props) => {
    const { className } = props;
    //Todo 실제 데이터를 Fetching 할때 Loading으로 사용
    const isLoading = true;
    const percent = 50;
    const recipes = [];

    return (
        <Wrapper className={className}>
            {isLoading ? (
                <LoadingContainer>
                    <LoadingBar percent={percent} />
                </LoadingContainer>
            ) : !recipes || recipes.length === 0 ? (
                <EmptyResult />
            ) : null}
        </Wrapper>
    );
};

export default result;

const Wrapper = styled.div``;
