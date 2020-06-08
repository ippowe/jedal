import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface ISearchOnWeb {
    className?: string;
    keyword?: string;
}

const Wrapper = styled.div`
    padding: 30px 14px;
    background-color: #f4f5f8;
`;

const StyledButton = styled(Button)`
    box-shadow: none;
    border: solid 1px #7a808e;
    background-color: #f4f5f8;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
    text-align: center;
    color: #7a808e;
    height: 50px;

    &:first-child {
        margin-bottom: 10px;
    }
`;

const SearchLink = styled.a`
    text-decoration: none;
    &:visited {
        color: #7a808e;
    }
`;

const NAVER_BASE_URL = 'https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=';
const YOUTUBE_BASE_URL = 'https://m.youtube.com/results?search_query=';

const SearchOnWeb: React.FC<ISearchOnWeb> = (props) => {
    const { className, keyword } = props;
    return (
        <Wrapper className={className}>
            <SearchLink href={NAVER_BASE_URL + keyword}>
                <StyledButton>네이버로 검색하기</StyledButton>
            </SearchLink>
            <SearchLink href={YOUTUBE_BASE_URL + keyword}>
                <StyledButton>유튜브로 검색하기</StyledButton>
            </SearchLink>
        </Wrapper>
    );
};

export default SearchOnWeb;
