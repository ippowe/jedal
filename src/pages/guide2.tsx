import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import MainHeader from '../components/MainHeader';
import GuideContent from '../components/GuideContent';
import ConversationWindow from '../components/ConversationWindow';
import Jar from '../../public/images/jar.svg';
import Scenery from '../../public/images/scenery.svg';
import ShopPost from '../../public/images/shopPost.svg';
import { animated, useSpring } from 'react-spring';
import Cloud from '../components/Cloud';

const StyledScenery = styled(Scenery)`
    position: absolute;
    bottom: 97px;
    left: 50%;
    transform: translateX(-50%);
`;

const StyledJar = styled(Jar)`
    position: absolute;
    bottom: 38px;
    left: 22px;
    z-index: 1;
`;

const StyledShopPost = styled(ShopPost)`
    position: absolute;
    bottom: 43px;
    left: 50%;
    transform: translateX(-50%);
`;

const StyledSvg = styled(animated.svg)`
    position: absolute;
    bottom: 0;
    left: 0;
`;

const Guide2: React.FC<{}> = () => {
    const props = useSpring({
        to: { opacity: 1, transform: 'translate3d(20px, -135px, 0)' },
        from: { opacity: 0, transform: 'translate3d(0px, 0px, 0)' },
        delay: 300,
        config: { duration: 1500 },
    });

    return (
        <>
            <MainHeader isVisibleSkip={true} />
            <GuideContent
                description={'길을 걷던 당신은 (전)수랏간 최고상궁이\n요리를 추천해준다는 가게를 발견했습니다.'}
            >
                <StyledJar />
                <Cloud />
                <StyledSvg width="100" height="100" viewBox="0 0 100 100" style={props}>
                    <circle
                        id="타원_9"
                        className="scenery-1"
                        cx="42.466"
                        cy="42.466"
                        r="42.466"
                        transform="translate(0 7.573)"
                    />
                </StyledSvg>
                <StyledScenery />
                <StyledShopPost />
            </GuideContent>
            <ConversationWindow
                name="나"
                description="배가 고픈 나그네"
                content={'아니, 수랏간 최고상궁을 지낸 이가\n 이런 곳에서 가게를 하고 있단 말인가?\n 들어가보자.'}
                stage={2}
            />
        </>
    );
};

export default Guide2;
