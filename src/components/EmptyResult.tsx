import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { resetAnswer } from '../modules/answer';

import womanBigSweat from '../../public/images/womanBigSweat.svg';

interface IEmptyResult {
    className?: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 45px;
    height: calc(100vh - 45px);
`;

const Inform = styled.div`
    margin-bottom: 6px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.31;
    color: #aaafbd;
`;

const Suggestion = styled.div`
    text-align: center;
    margin-bottom: 47px;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.08;
    color: #333740;
`;

const Woman = styled(womanBigSweat)`
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
`;

const RestartButton = styled(Button)`
    margin: 0 auto;
    margin-bottom: 21px;
    min-height: 46px;
    width: calc(100% - 40px);
`;

const EmptyResult: React.FC<IEmptyResult> = (props) => {
    const { className } = props;
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClickRestart = (): void => {
        dispatch(resetAnswer());
        router.push('/qna');
    };

    return (
        <Wrapper className={className}>
            <Inform>이럴수가! 추천드릴 제철요리가 없습니다</Inform>
            <Suggestion>다시 한번 추천을 받아보세요</Suggestion>
            <Woman />
            <RestartButton onClick={handleClickRestart} variant="primary">
                다시 추천 받기
            </RestartButton>
        </Wrapper>
    );
};

export default EmptyResult;
