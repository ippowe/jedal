import React from 'react';
import styled from 'styled-components';

interface IBrowserNotice {
    className?: string;
}

const Wrapper = styled.div``;

const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    color: #333740;

    > strong {
        color: #f54132;
    }
`;

const BrowserNotice: React.FC<IBrowserNotice> = (props) => {
    const { className } = props;
    return (
        <Wrapper className={className}>
            <Text>안녕하세요!</Text>
            <Text>
                제철요리 추천 서비스 <strong>오늘의 수라</strong>를
            </Text>
            <Text>만든 ✨Steel Hungry✨ 팀입니다.</Text>
        </Wrapper>
    );
};

export default BrowserNotice;
