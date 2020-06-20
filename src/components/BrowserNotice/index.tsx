import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import { BrowserView } from 'react-device-detect';

import Notice from './Notice';
import QRCode from './QRCode';
import Team from './Team';
import Footer from './Footer';
import Link from 'next/link';

interface Iindex {
    className?: string;
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding-top: 30px;
`;

const Logo = styled.img`
    display: block;
    height: 29px;
    width: 130px;
    margin: 0 auto;
    margin-bottom: 55px;
`;

const Woman = styled.img`
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    width: 75px;
    height: 75px;
`;

const StyledNotice = styled(Notice)`
    margin-bottom: 57px;
`;

const StyledQRCode = styled(QRCode)`
    margin-bottom: 32px;
`;

const index: React.FC<Iindex> = (props) => {
    const { className } = props;

    const [hasMounted, setHasMounted] = useState(false);

    // Will be called on initial mount.
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <Portal>
            <BrowserView>
                <Wrapper className={className}>
                    <Logo src="/images/logo.png" />
                    <Woman src="/images/woman-bowing.png" />
                    <StyledNotice />
                    <StyledQRCode />
                    <Team />
                    <Footer />
                </Wrapper>
            </BrowserView>
        </Portal>
    );
};

export default index;
