import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
    height: 45px;
    display: flex;
    align-items: flex-end;
    padding: 0 27px;
`;

const Logo = styled.image`
    width: 110px;
    height: 24px;
`;

const MainHeader: React.FC<{}> = () => {
    const router = useRouter();
    const onClickLogo = () => {
        router.push('/');
    };
    return (
        <Container>
            <Logo src="/images/logo.png" onClick={onClickLogo} />
        </Container>
    );
};

export default MainHeader;
