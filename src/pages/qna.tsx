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

const qna: React.FC<QnAProps> = (props) => {
    const { className } = props;
    return (
        <Wrapper className={className}>
            <Header />
        </Wrapper>
    );
};

export default qna;
