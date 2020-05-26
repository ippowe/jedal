import React from 'react';
import styled from 'styled-components';

import QnAHeader from '../components/QnAHeader';

interface QnAProps {
    className?: string;
}

const Wrapper = styled.div``;

const Header = styled(QnAHeader)`
    margin-bottom: 42px;
`;

const DUMMY_QUESTION = {
    question: {
        phrase: '특별히 좋아하는 음식 종류나 드시고 싶은 것이 있으십니까?',
        empasis: ['음식 종류', '드시고 싶은 것'],
    },
    isMultiple: true,
    options: [
        '밥',
        '국 / 찌개',
        '조림 / 찜',
        '구이 / 볶음 / 부침 / 튀김',
        '샐러드 / 밑반찬',
        '만두 / 면류 / 그라탕',
        '간식',
    ],
};

const qna: React.FC<QnAProps> = (props) => {
    const { className } = props;
    const { question, isMultiple, options } = DUMMY_QUESTION;
    return (
        <Wrapper className={className}>
            <Header />
        </Wrapper>
    );
};

export default qna;
