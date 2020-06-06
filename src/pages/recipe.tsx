import React from 'react';
import styled from 'styled-components';

interface Irecipe {
    className?: string;
}

const recipe: React.FC<Irecipe> = (props) => {
    const { className } = props;
    return <Wrapper className={className}></Wrapper>;
};

export default recipe;

const Wrapper = styled.div``;
