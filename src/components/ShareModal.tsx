import React from 'react';
import styled, { css } from 'styled-components';
import Modal from './Modal';
import Button from './Button';
import Ink from 'react-ink';
import { useRouter } from 'next/router';
import checkMobile from '../utils/checkMobile';
import { useDispatch } from 'react-redux';
import { createToast, displayToast } from '../modules/toast';
import { uniqueId } from 'lodash';
import { ISuggestion } from '../modules/suggestion';
import Close from '../../public/images/close.svg';

interface Props {
    isVisible: boolean;
    onClose: () => void;
    recipeDetail: ISuggestion;
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
    padding: 2.5px;
`;

const CloseButton = styled(Close)``;

const ShareModal: React.FC<Props> = ({ isVisible, onClose, recipeDetail }) => {
    const {
        recipeId,
        recipeName,
        recipe: { summary, imgUrl },
    } = recipeDetail;
    const sharePageUrl = `https://todaysura.com/detail/${recipeId}?share=true`;
    const dispatch = useDispatch();
    const onClickShareKaKao = () => {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: recipeName,
                description: summary,
                imageUrl: imgUrl,
                link: {
                    mobileWebUrl: sharePageUrl,
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

    const onClickFacebook = () => {
        FB.ui(
            {
                method: 'share',
                href: sharePageUrl,
            },
            function (response) {},
        );
    };

    const onClickUrlCopy = () => {
        const input = document.createElement('input');
        input.value = sharePageUrl;
        document.body.appendChild(input);
        const timeout = setTimeout(() => {
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            dispatch(displayToast(uniqueId(), 'URL이 복사되었습니다.'));
            onClose();
        });

        return () => {
            clearTimeout(timeout);
        };
    };

    return (
        <Modal isVisible={isVisible} onClose={onClose} modalCss={ModalCss}>
            <Title>오늘의 수라 알리기</Title>
            <CloseButtonWrapper onClick={onClose}>
                <CloseButton />
                <Ink />
            </CloseButtonWrapper>
            <Description>
                추천받은 요리가 마음에 드셨다면,
                <br /> 제철요리 추천서비스를 주변에 알려주세요!
            </Description>
            <ShareButtons>
                <Button css={KakaoButtonCss} size="big" onClick={onClickShareKaKao}>
                    카카오톡
                </Button>
                <Button css={FacebookButtonCss} size="big" onClick={onClickFacebook}>
                    페이스북
                </Button>
                <Button
                    css={SmsButtonCss}
                    size="big"
                    href={`sms:${checkMobile() === 'ios' ? '&' : '?'}body=${sharePageUrl}`}
                >
                    문자 메세지
                </Button>
                <Button css={LinkButtonCss} size="big" onClick={onClickUrlCopy}>
                    링크 복사
                </Button>
            </ShareButtons>
        </Modal>
    );
};

export default ShareModal;
