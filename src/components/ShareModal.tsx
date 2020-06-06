import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { css } from 'styled-components';
import Button from './Button';
import Close from '/public/images/close.png';
import Ink from 'react-ink';

interface Props {
    isVisible: boolean;
    onClose: () => void;
}

const ModalCss = css`
    position: relative;
    width: 320px;
    border-radius: 10px;
    padding: 40px 20px 20px 20px;
    box-sizing: border-box;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #333740;
    margin-bottom: 10px;
`;

const Description = styled.div`
    text-align: center;
    font-family: 'Noto Sans KR', serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.57;
    color: #333740;
`;

const KakaoButtonCss = css`
    color: #181600;
    background-color: #ffe502;
    margin-bottom: 10px;
`;
const FacebookButtonCss = css`
    color: white;
    background-color: #1a76f2;
    margin-bottom: 10px;
`;
const SmsButtonCss = css`
    color: white;
    background-color: #333740;
    margin-bottom: 10px;
`;
const LinkButtonCss = css`
    color: #181600;
    background-color: #d6d9e3;
`;

const ShareButtons = styled.div`
    margin-top: 30px;
`;

const CloseButtonWrapper = styled.div`
    position: absolute;
    top: 17.5px;
    right: 17.5px;
    padding: 5px;
`;

const CloseButton = styled.img``;

const ShareModal: React.FC<Props> = ({ isVisible, onClose }) => {
    const onClickShareKaKao = () => {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '디저트 사진',
                description: '아메리카노, 빵, 케익',
                imageUrl:
                    'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    androidExecParams: 'test',
                },
            },
            buttons: [
                {
                    title: '나도 추천받기',
                    link: {
                        mobileWebUrl: 'https://todaysura.com',
                    },
                },
            ],
            success: function (response) {
                console.log(response);
            },
            fail: function (error) {
                console.log(error);
            },
        });
    };
    return (
        <Modal isVisible={isVisible} onClose={onClose} modalCss={ModalCss}>
            <Title>오늘의 수라 알리기</Title>
            <CloseButtonWrapper>
                <CloseButton src="/images/close.png" alt="닫기" />
                <Ink />
            </CloseButtonWrapper>
            <Description>
                추천받은 요리가 마음에 드셨다면,
                <br /> 제철요리 추천서비스를 주변에 알려주세요!
            </Description>
            <ShareButtons>
                <Button buttonCss={KakaoButtonCss} size="big" onClick={onClickShareKaKao}>
                    카카오톡
                </Button>
                <Button buttonCss={FacebookButtonCss} size="big">
                    페이스북
                </Button>
                <Button buttonCss={SmsButtonCss} size="big">
                    문자 메세지
                </Button>
                <Button buttonCss={LinkButtonCss} size="big">
                    링크 복사
                </Button>
            </ShareButtons>
        </Modal>
    );
};

export default ShareModal;
