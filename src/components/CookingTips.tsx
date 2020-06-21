import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

interface ICookingTips {
    className?: string;
    cookingTips: { name: string; tip: string }[];
}

const Wrapper = styled.div`
    padding: 30px 16px;
    background-color: #f4f5f8;
`;

const Title = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 900;
    line-height: 1.43;
    color: #333740;
    margin-bottom: 10px;
    padding: 0px 10px;
`;

const StyledToggle = styled(Toggle)`
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const CookingTips: React.FC<ICookingTips> = (props) => {
    const { className, cookingTips } = props;
    return (
        <Wrapper className={className}>
            <Title>재료 손질 요령</Title>
            {cookingTips.map((tip) => (
                <StyledToggle title={tip.name} description={tip.tip} key={tip.name} />
            ))}
        </Wrapper>
    );
};

export default CookingTips;
