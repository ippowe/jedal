import React from 'react';
import styled from 'styled-components';

interface ITab {
    className?: string;
    tabs: string[];
    onClickTab: (tab: string) => void;
    selectedTab: string;
}

const Wrapper = styled.div``;

const Contents = styled.div`
    background-color: #e4e8ef;
`;

const TabButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TabButton = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
    color: #aaafbd;
    border-bottom: 2px solid #e0e3eb;
    padding: 10px 0;
    width: 100%;
    text-align: center;
    cursor: pointer;

    &.tab__selected {
        font-weight: 900;
        color: #333740;
        border-bottom: 2px solid #333740;
    }
`;

const Tab: React.FC<ITab> = (props) => {
    const { className, children, tabs, onClickTab, selectedTab } = props;
    return (
        <Wrapper className={className}>
            <TabButtonsWrapper>
                {tabs.map((tab) => (
                    <TabButton
                        key={tab}
                        onClick={(): void => onClickTab(tab)}
                        className={selectedTab === tab ? 'tab__selected' : ''}
                    >
                        {tab}
                    </TabButton>
                ))}
            </TabButtonsWrapper>
            <Contents>{children}</Contents>
        </Wrapper>
    );
};

export default Tab;
