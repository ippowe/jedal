import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import GuideContent from '../components/GuideContent';
import ConversationWindow from '../components/ConversationWindow';
import Jar from '../../public/images/jar.svg';
import Scenery from '../../public/images/scenery.svg';
import ShopPost from '../../public/images/shopPost.svg';

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

const Guide2: React.FC<{}> = () => {
    return (
        <>
            <MainHeader />
            <GuideContent
                description={'길을 걷던 당신은 (전)수랏간 최고상궁이\n요리를 추천해준다는 가게를 발견했습니다.'}
            >
                <StyledJar />
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
