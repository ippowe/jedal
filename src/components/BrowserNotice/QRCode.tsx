import React from 'react';
import styled from 'styled-components';

interface IQRCode {
    className?: string;
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 458px;
    margin: 0 auto;
`;

const Caution = styled.div`
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    color: #333740;
    font-size: 20px;
    margin-bottom: 21px;

    > i {
        font-size: 20px;
        font-style: normal;
    }
`;

const Description = styled.div`
    width: 319px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    color: #6e7584;
    padding-left: 21px;
`;

const QRCodeImage = styled.img`
    background-color: #303030;
    width: 90px;
    height: 108px;
    position: absolute;
    right: 0;
    bottom: 0;
`;

const QRCode: React.FC<IQRCode> = (props) => {
    const { className } = props;
    return (
        <Wrapper className={className}>
            <Caution>
                <i>🤚 </i>잠깐! 알려드려요
            </Caution>
            <Description>
                오늘의 수라는 <strong>모바일웹 환경에 최적화</strong>되어 있습니다. 지금 스마트폰으로 우측 QR코드를
                인식하시면 원활한 이용이 가능합니다.
            </Description>
            <QRCodeImage />
        </Wrapper>
    );
};

export default QRCode;
