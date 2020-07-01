import React, { useState } from 'react';
import styled from 'styled-components';
import { replace } from 'lodash';

import PlusIcon from '../../public/images/Plus-icon.svg';
import MinusIcon from '../../public/images/Minus-icon.svg';

interface IToggle {
    className?: string;
    title?: string;
    description?: string;
}

const Wrapper = styled.div`
    border-radius: 10px;
    width: 100%;

    &.wrapper__opened {
        border: 1px solid #d1d5de;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 10px;
    background-color: #ffffff;
    border-radius: 10px;
    cursor: pointer;

    &.title-wrapper__opened {
        border-radius: 10px 10px 0 0;
    }
`;

const Title = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #7b818f;
    &.title__opened {
        color: #333740;
    }
`;

const Description = styled.div`
    font-family: NotoSansCJKkr;
    padding: 10px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.57;
    letter-spacing: -0.25px;
    color: #333740;
    border-radius: 0 0 10px 10px;
    background-color: #e5e7ed;
    text-align: justify;
`;

const Plus = styled(PlusIcon)`
    > path {
        stroke: #7a808e;
    }
`;

const Minus = styled(MinusIcon)`
    > path {
        stroke: #333740;
    }
`;

const Toggle: React.FC<IToggle> = (props) => {
    const { className, title, description } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleClickTitle = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <Wrapper className={isOpen ? 'wrapper__opened ' + className : className}>
            <TitleWrapper onClick={handleClickTitle} className={isOpen ? 'title-wrapper__opened' : ''}>
                <Title className={isOpen ? 'title__opened' : ''}>{title}</Title>
                {isOpen ? <Minus /> : <Plus />}
            </TitleWrapper>
            {isOpen && <Description>{replace(description, /？/g, '')}</Description>}
        </Wrapper>
    );
};

export default Toggle;
