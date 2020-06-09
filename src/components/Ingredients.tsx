import React, { useState } from 'react';
import styled from 'styled-components';

import BowlIcon from '../../public/images/bowl.svg';
import ToggleIcon from '../../public/images/Toggle-icon.svg';

interface IIngredients {
    className?: string;
    amount?: string;
    ingredients: { name: string; amount: string }[];
}

const Wrapper = styled.div`
    margin-bottom: 10px;
    background-color: #f4f5f8;
    padding: 30px 26px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const Title = styled.span`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 900;
    line-height: 1.43;
    color: #333740;
`;

const Amount = styled.span`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    color: #333740;
`;

const Bowl = styled(BowlIcon)`
    width: 20px;
    height: 10px;
    margin-right: 4px;

    &:last-child {
        margin-right: 6px;
    }
`;

const Ingredient = styled.div`
    position: relative;
    text-align: right;
    white-space: nowrap;
    margin-bottom: 10px;
`;

const IngredientName = styled.span`
    background: #f4f5f8;
    float: left;
    position: relative;
    padding-right: 6px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.43;
    color: #333740;
`;
const IngredientAmount = styled.span`
    position: relative;
    overflow: hidden;
    background: #f4f5f8;
    padding-left: 6px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.43;
    text-align: right;
    color: #7b818f;
`;

const Dots = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    border-bottom: 1px dashed #d1d5dd;
    height: 50%;
`;

const ShowAllButton = styled.div`
    display: flex;
    align-items: center;
    width: 80px;
    margin: 0 auto;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #7b818e;
`;

const Toogle = styled(ToggleIcon)`
    margin-left: 8px;
    transition: transform 100ms ease;

    &.toggle__opened {
        transform: rotate(0.5turn);
    }
`;

const Ingredients: React.FC<IIngredients> = (props) => {
    const { className, amount, ingredients } = props;
    const [isShowAll, setIsShowAll] = useState(false);

    return (
        <Wrapper className={className}>
            <Header>
                <Title>재료</Title>
                {!!amount && (
                    <Amount>
                        {Array(parseInt(amount))
                            .fill(1)
                            .map((el, index) => (
                                <Bowl key={`bowl-icon__${index}`} />
                            ))}
                        {amount}
                    </Amount>
                )}
            </Header>
            {ingredients.map((ingredient, index) => {
                if (index <= 7 || isShowAll) {
                    return (
                        <Ingredient key={ingredient.name}>
                            <Dots />
                            <IngredientName>{ingredient.name}</IngredientName>
                            <IngredientAmount>{ingredient.amount}</IngredientAmount>
                        </Ingredient>
                    );
                }
            })}
            {ingredients.length > 8 && (
                <ShowAllButton onClick={(): void => setIsShowAll(!isShowAll)}>
                    전체보기
                    <Toogle className={isShowAll ? 'toggle__opened' : ''} />
                </ShowAllButton>
            )}
        </Wrapper>
    );
};

export default Ingredients;
