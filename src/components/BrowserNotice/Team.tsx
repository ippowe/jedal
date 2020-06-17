import React from 'react';
import styled from 'styled-components';

import Member from './Memeber';

import MEMBER_INFO from '../../assets/members.json';

interface ITeam {
    className?: string;
}

const Wrapper = styled.div`
    height: 100%;
`;

const Title = styled.div`
    width: 458px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.29;
    color: #333740;
    margin: 0 auto;
    margin-bottom: 9px;

    > i {
        font-size: 20px;
        font-style: normal;
    }
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #303b57;
`;

const Members = styled.div`
    width: 458px;
    margin: 0 auto;
    padding: 24px 0 39px 0;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 28px 14px;
`;

const Team: React.FC<ITeam> = (props) => {
    const { className } = props;
    return (
        <Wrapper className={className}>
            <Title>
                <i>📌 </i>만든 사람들
            </Title>
            <Background>
                <Members>
                    {MEMBER_INFO.map((member) => (
                        <Member member={member} key={member.email} />
                    ))}
                </Members>
            </Background>
        </Wrapper>
    );
};

export default Team;
