import React from 'react';
import styled from 'styled-components';

interface IFooter {
    className?: string;
}

const Wrapper = styled.div`
    padding: 13px 0;
    background-color: #202533;
    font-family: NotoSansCJKkr;
    font-size: 8px;
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
    color: #ffffff;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const Footer: React.FC<IFooter> = (props) => {
    const { className } = props;
    return (
        <Wrapper className={className}>
            Copyrightsⓒ All rights. <strong>SteelHungry</strong>
        </Wrapper>
    );
};

export default Footer;
