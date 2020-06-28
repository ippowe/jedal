import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Ink from 'react-ink';

import { resetAnswer } from '../modules/answer';

interface Props {
    isVisibleSkip?: boolean;
}
const Container = styled.div`
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 27px;
`;

const Logo = styled.img`
    width: 110px;
    height: 24px;
`;

const SkipButton = styled.span`
    position: relative;
    color: #bbbbbb;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.12px;
`;

const MainHeader: React.FC<Props> = ({ isVisibleSkip = false }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const onClickLogo = () => {
        router.push('/');
        dispatch(resetAnswer());
    };

    const onClickSkip = () => {
        router.push('/guide4');
    };
    return (
        <Container>
            <Logo src="/images/logo.png" onClick={onClickLogo} />
            {isVisibleSkip && (
                <SkipButton onClick={onClickSkip}>
                    건너뛰기
                    <Ink />
                </SkipButton>
            )}
        </Container>
    );
};

export default MainHeader;
