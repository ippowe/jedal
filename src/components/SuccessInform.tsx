import React from 'react';
import styled from 'styled-components';

import BackgroundPattern from './BackgroundPattern';
import DescriptionWindow from '../../public/images/default_window.svg';

interface ISuccessInform {
    className?: string;
}

const Wrapper = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 23%;
`;

const Background = styled(BackgroundPattern)`
    transform: translate3d(-250px, 0, 0);
    margin-bottom: 40px;

    &:nth-child(2n) {
        transform: translate3d(-63px, 0, 0);
        grid-gap: 71px;
    }
`;

const StyledWindow = styled(DescriptionWindow)`
    width: 100%;
    height: 100%;
`;

const InformWrapper = styled.div`
    width: calc(100% - 44px);
    margin: 0 auto;
    height: 100%;
    position: relative;
`;

const Inform = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    height: 100%;
    line-height: 100vh;
    font-size: 17px;
    font-weight: 500;
`;

const SuccessInform: React.FC<ISuccessInform> = (props) => {
    const { className } = props;
    const numberOfBackgrounds = Math.round(window.outerHeight / 300);
    return (
        <Wrapper className={className}>
            <InformWrapper>
                <Inform>맞춤 요리가 준비되었습니다.</Inform>
                <StyledWindow />
            </InformWrapper>
            <BackgroundWrapper>
                {Array(numberOfBackgrounds)
                    .fill(1)
                    .map((el, index) => (
                        <Background key={`background_${index}`} />
                    ))}
            </BackgroundWrapper>
        </Wrapper>
    );
};

export default SuccessInform;
