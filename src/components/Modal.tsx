import React, { ReactNode, useRef } from 'react';
import { Portal } from 'react-portal';
import styled, { CSSProp } from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import { animated, config, useTransition } from 'react-spring';

interface Props {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
    modalCss?: CSSProp;
}

const Dimmer = styled(animated.div)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalBox = styled.div<{ css }>`
    min-width: 100px;
    background-color: white;
    ${(props) => props.css}
`;

const Modal: React.FC<Props> = ({ isVisible, onClose, children, modalCss }) => {
    const modalRef = useRef(null);
    const transitions = useTransition(isVisible, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.stiff,
    });

    const onOutsideClick = () => {
        if (isVisible) {
            onClose();
        }
    };

    return (
        <Portal>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <Dimmer style={props} key={key}>
                            <OutsideClickHandler
                                onOutsideClick={onClose}
                            >
                                <ModalBox ref={modalRef} css={modalCss}>
                                    {children}
                                </ModalBox>
                            </OutsideClickHandler>
                        </Dimmer>
                    ),
            )}
        </Portal>
    );
};

export default Modal;
