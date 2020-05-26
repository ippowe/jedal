import React from 'react';
import styled, { CSSProp } from 'styled-components';

type Variant = 'primary' | 'standard';

interface Props {
    variant?: Variant;
    children: React.ReactNode;
    buttonCss?: CSSProp;
    width?: string;
    size?: 'big';
}

const Container = styled.button<{ variant: Variant; css: CSSProp; width?: string; size?: 'big' }>`
    width: ${({ width }) => (width ? width : '100%')};
    height: ${({ size }) => (size === 'big' ? '48px' : '40px')};
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
    width,
    size,
    ...otherProps
}) => {
    return (
        <Container variant={variant} css={buttonCss} width={width} size={size} {...otherProps}>
            {children}
        </Container>
    );
};

export default Button;
