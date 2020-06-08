import React from 'react';
import styled, { keyframes } from 'styled-components';
import MainHeader from '../components/MainHeader';
import Emoji from '../components/Emoji';
import { animated } from 'react-spring';
import members from '../assets/members.json';
import { map } from 'lodash';

interface Member {
    name: string;
    position: string;
    email: string;
    photo: string;
    link: string;
}
const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.secondary};
`;

const Body = styled.div`
    padding: 0 20px;
`;

const Title = styled.div`
    margin-top: 41px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.38;
    color: #ffffff;
    text-align: center;
`;

const Bowing = styled.img`
    width: 82px;
    height: 82px;
    margin: 0 auto;
    display: block;
    margin-top: 16px;
`;

const Description = styled.div`
    position: relative;
    margin-top: 41px;
    font-size: 13px;
    line-height: 1.38;
    text-align: center;
    color: #ffffff;
`;

const upDown = keyframes`
    0% {
        transform: translateY(0px);
    }
    100%{
        transform: translateY(5px);
    }
`;

const EmojiWrapper = styled(animated.div)`
    position: absolute;
    animation: ${upDown} 0.8s ease-in-out infinite;
    bottom: 3px;
    left: calc(50% + 55px);
`;

const Line = styled.div`
    position: relative;
`;

const Photo = styled.img`
    width: 67px;
    height: 67px;
    object-fit: cover;
    margin-right: 19px;
`;
const MemberWrapper = styled.a`
    display: flex;
    height: 75px;
    border-radius: 5px;
    border: solid 1.5px #e1e4eb;
    background-color: rgba(255, 255, 255, 0.06);
    padding-left: 16px;
    padding-bottom: 3px;
    box-sizing: border-box;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;
const Content = styled.div``;
const Name = styled.span`
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
    color: #ffffff;
    margin-right: 13px;
`;
const Position = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    color: #aeaeae;
`;
const Row = styled.div`
    margin-top: 18px;
`;
const Email = styled.div`
    font-size: 13px;
    line-height: 1.38;
    color: #ffffff;
    margin-top: 9px;
`;

const MemberList = styled.div`
    margin-top: 25px;
`;

const Footer = styled.div`
    margin-top: 40px;
    padding-bottom: 20px;
`;

const DashedLine = styled.div`
    height: 2px;
    background-image: linear-gradient(90deg, #aeaeae, #aeaeae 65%, transparent 65%, transparent 100%);
    background-size: 8px 2px;
`;

const Team: React.FC<{}> = () => {
    const renderMember = (member: Member) => {
        return (
            <MemberWrapper href={member.link} target="_blank">
                <Photo src={`/images/${member.photo}`} />
                <Content>
                    <Row>
                        <Name>{member.name}</Name>
                        <Position>{member.position}</Position>
                    </Row>
                    <Email>{member.email}</Email>
                </Content>
            </MemberWrapper>
        );
    };

    return (
        <Container>
            <MainHeader />
            <Body>
                <Title>
                    안녕하세요!
                    <br />
                    오늘의 수라를 만든
                    <br />
                    <Emoji name="sparkles" />
                    Steel Hungry
                    <Emoji name="sparkles" /> 팀입니다.
                </Title>
                <Bowing src={`images/womanBowing.png`} />
                <Description>
                    저희는 기획자 2명, 디자이너 2명,
                    <br /> 개발자 4명으로 구성되어 있습니다.
                    <br />
                    <Line>
                        <br /> 바로 이 사람들이죠
                        <EmojiWrapper>
                            <Emoji name="white-down-pointing-backhand-index" />
                            <Emoji name="white-down-pointing-backhand-index" />
                        </EmojiWrapper>
                    </Line>
                </Description>
                <MemberList>{map(members, (member) => renderMember(member))}</MemberList>
                <Description>
                    저희에게 궁금한게 있으시다면 언제든지 연락주세요.
                    <br />
                    <br />
                    찾아주셔서 감사합니다.
                    <br />
                    오늘의 수라를 마음껏 즐겨주세요!
                </Description>
                <Footer>
                    <DashedLine />
                    <Description>
                        Special Thanks to 진지한컴퍼니
                        <Emoji name="face-throwing-a-kiss" />
                    </Description>
                </Footer>
            </Body>
        </Container>
    );
};

export default Team;
