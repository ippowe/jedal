import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import GuideContent from '../components/GuideContent';
import ConversationWindow from '../components/ConversationWindow';
import TreeLeftFront from '../../public/images/tree_leftfront.svg';
import TreeLeftBack from '../../public/images/tree_leftback2.svg';
import Man from '../../public/images/man.svg';
import TreeRightFront from '../../public/images/tree_rightfront.svg';
import TreeRightBack2 from '../../public/images/tree_rightback2.svg';

const StyledTreeLeftFront = styled(TreeLeftFront)`
    position: absolute;
    bottom: -10px;
    left: 20px;
`;

const StyledTreeLeftBack = styled(TreeLeftBack)`
    position: absolute;
    z-index: -1;
    left: -30px;
    bottom: 0;
`;

const StyledMan = styled(Man)`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
`;

const StyledTreeRightFront = styled(TreeRightFront)`
    position: absolute;
    right: -5px;
    bottom: 10px;
`;
const StyledTreeRightBack2 = styled(TreeRightBack2)`
    position: absolute;
    right: 20px;
    bottom: 90px;
`;

const Guide1: React.FC<{}> = () => {
    return (
        <>
            <MainHeader />
            <GuideContent description={'어느 주말 오후\n 배가 고픈 당신은 저잣거리에 나왔습니다.'}>
                <StyledTreeLeftFront />
                <StyledTreeLeftBack />
                <StyledMan />
                <StyledTreeRightFront />
                <StyledTreeRightBack2 />
            </GuideContent>
            <ConversationWindow
                name="나"
                description="배가 고픈 나그네"
                content={'아니, 수랏간 최고상궁을 지낸 이가\n 이런 곳에서 가게를 하고 있단 말인가?\n들어가보자.'}
            />
        </>
    );
};

export default Guide1;
