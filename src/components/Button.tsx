import React from 'react';
import styled, { CSSProp } from 'styled-components';

type Variant = 'primary' | 'standard';

interface Props {
    variant?: Variant;
    children: React.ReactNode;
    buttonCss?: CSSProp;
}

const Container = styled.button<{ variant: Variant; css: CSSProp }>`
    width: 245px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ variant, theme }) => (variant === 'primary' ? theme.primary : 'white')};
    border: none;
    border-radius: 10px;
    font-size: 16px;
    color: ${({ variant }) => (variant === 'primary' ? 'white' : 'black')};
    ${(props) => props.css}
    &:focus {
        outline: none;
    }
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
`;

const Button: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({
    children,
    variant = 'standard',
    buttonCss,
    ...otherProps
}) => {
    return (
        <Container variant={variant} css={buttonCss} {...otherProps}>
            {children}
        </Container>
    );
};

export default Button;
