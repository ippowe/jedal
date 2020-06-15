import React from 'react';
import styled, { CSSProp } from 'styled-components';
import Ink from 'react-ink';

type Variant = 'primary' | 'standard';

interface Props {
    className?: string;
    variant?: Variant;
    children: React.ReactNode;
    css?: CSSProp;
    width?: string;
    href?: string;
    size?: 'big';
    onClick?: () => void;
}

const Container = styled.button<Props>`
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

const Button: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Container as={props.href ? 'a' : 'button'} {...props}>
            {children}
            <Ink background={true} opacity={0.25} />
        </Container>
    );
};

export default Button;
