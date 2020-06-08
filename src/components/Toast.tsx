import React from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { animated, useTransition } from 'react-spring';

const Container = styled(animated.div)<{ index: number }>`
    position: fixed;
    bottom: ${(props) => `${props.index * 20 + 60}px`};
    left: 50%;
    color: white;
    font-size: 14px;
    background-color: #666666;
    padding: 12px 16px;
    border-radius: 24px;
    box-shadow: 0 2px 4px 0 rgba(175, 194, 219, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0);
`;

const Toast: React.FC<{}> = () => {
    const toasts = useSelector((state: RootState) => state.toast.toasts, shallowEqual);
    const transitions = useTransition(toasts, (toast) => toast.id, {
        from: { transform: 'translate3d(-50%,20px,0)', opacity: 0 },
        enter: { transform: 'translate3d(-50%, -40px,0)', opacity: 1 },
        leave: { transform: 'translate3d(-50%,-40px,0)', opacity: 0 },
    });
    return (
        <Portal>
            {transitions.map(({ item, props, key }, index) => (
                <Container key={key} style={props} index={index}>
                    {item.message}
                </Container>
            ))}
        </Portal>
    );
};

export default Toast;
