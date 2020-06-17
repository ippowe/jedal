import React from 'react';
import styled from 'styled-components';

interface IMemeber {
    className?: string;
    member?: {
        photo: string;
        name: string;
        position: string;
        email: string;
        link: string;
    };
}

const Wrapper = styled.div``;

const Memoji = styled.img`
    width: 41px;
    height: 41px;
    margin-bottom: 7px;
`;

const Row = styled.div`
    margin-bottom: 6px;
`;

const Name = styled.span`
    font-size: 12px;
    font-weight: bold;
    line-height: 0.83;
    color: #f4f4f4;
    margin-right: 7px;
`;

const Position = styled.span`
    font-size: 10px;
    font-weight: 500;
    line-height: 0.9;
    color: #aeaeae;
`;

const Email = styled.div`
    font-size: 9px;
    font-weight: 500;
    line-height: 1.11;
    color: #f4f4f4;
`;

const Memeber: React.FC<IMemeber> = (props) => {
    const { className, member } = props;
    const { photo, name, email, position, link } = member;
    return (
        <Wrapper className={className}>
            <Memoji src={`/images/${photo}`} />
            <Row>
                <Name>{name}</Name>
                <Position>{position}</Position>
            </Row>
            <Email>{email}</Email>
        </Wrapper>
    );
};

export default Memeber;
