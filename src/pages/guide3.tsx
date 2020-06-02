import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import GuideContent from '../components/GuideContent';
import ConversationWindow from '../components/ConversationWindow';
import Jar2 from '../../public/images/jar2.svg';
import ShopPale from '../../public/images/shopPale.svg';
import Woman from '../../public/images/woman.svg';

const StyledScenery = styled(ShopPale)`
    position: absolute;
    bottom: 53px;
    left: 50%;
    transform: translateX(-50%);
`;

const StyledJar = styled(Jar2)`
    position: absolute;
    bottom: 27px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
`;

const StyledShopPost = styled(Woman)`
    position: absolute;
    bottom: 27px;
    left: 50%;
    transform: translateX(-50%);
`;

const Guide2: React.FC<{}> = () => {
    return (
        <>
            <MainHeader />
            <GuideContent description={'가게에 들어가니 주인이 당신을 반겨줍니다.\n수랏간 출신답게 기개가 엄청나군요.'}>
                <StyledJar />
                <StyledScenery />
                <StyledShopPost />
            </GuideContent>
            <ConversationWindow
                name="나장금"
                description="(전)수랏간 최고상궁"
                content={'어서오십시오.\n이 곳은 말만 하시면 알아서 요리를\n추천해드리는 곳입니다.\n무엇을 드시겠습니까?'}
                stage={3}
            />
        </>
    );
};

export default Guide2;
