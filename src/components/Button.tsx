import React from 'react';
import styled, { CSSProp } from 'styled-components';
import Ink from 'react-ink';

type Variant = 'primary' | 'standard';

interface Props {
    variant?: Variant;
    children: React.ReactNode;
    buttonCss?: CSSProp;
    width?: string;
    size?: 'big';
}

const Container = styled.button<{ variant: Variant; css: CSSProp; width?: string; size?: 'big' }>`
    position: relative;
    width: ${({ width }) => (width ? width : '100%')};
    height: ${({ size }) => (size === 'big' ? '50px' : '45px')};
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
            <Ink background={true} opacity={0.25} />
        </Container>
    );
};

export default Button;
