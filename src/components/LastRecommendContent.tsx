import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import infoIcon from "../../public/images/icon-exclamation-circle.svg";
import infoHoverIcon from "../../public/images/icon-exclamation-circle-hover.svg";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
    position: relative;
    padding-top: 49px;
    box-sizing: border-box;
`;
const Title = styled(animated.div)`
    white-space: pre-line;
    padding-left: 27px;
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.15;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    display: inline-block;
`;
const InfoButton = styled(infoIcon)`
    width: 18px;
    height: 18px;
    display: inline-block;
    padding-left: 6.6px;
`;
const InfoHoverButton = styled(infoHoverIcon)`
    width: 18px;
    height: 18px;
    display: inline-block;
    padding-left: 6.6px;
`;
const InfoPopup = styled.div`
  width: 254px;
  height: 214px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  position: absolute;
  right: 17px;
  top: 83px;
`;
const InfoContainer = styled.div`
  padding: 21px 20px;
`;
const InfoTitle = styled.div`
  width: 50px;
  height: 14px;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
const InfoDescription = styled.div`
  padding-top: 19px;
  width: 212px;
  height: 138px;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
 `;
const LastRecommendContent: React.FC<Props> = ({ children }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  const [showInfoPopup, setShowInfoPopup] = useState(false);

  return (
    <Container>
      <Title style={props}>지난 추천 요리</Title>
      {showInfoPopup === true ? <InfoHoverButton onClick={() => setShowInfoPopup(!showInfoPopup)}/> :
        <InfoButton onClick={() => setShowInfoPopup(!showInfoPopup)}/>}
      {showInfoPopup === true && <InfoPopup onClick={() => setShowInfoPopup(false)}>
        <InfoContainer>
          <InfoTitle>주의 사항</InfoTitle>
          <InfoDescription>
            - 캐시가 삭제된 경우 지난 추천 요리 목록이
            제공되지 않습니다.
            <br/>
            <br/>
            - 다른 기기로 접속하는 경우 다른 기기에서
            진행하였던 지난 추천 요리 목록이 제공되지
            않습니다.
            <br/>
            <br/>
            - 카카오톡 뷰어를 통해 접속하는 경우
            지난 추천 요리 목록이 제공되지 않습니다.
          </InfoDescription>
        </InfoContainer>
      </InfoPopup>}
      {children}
    </Container>
  );
};

export default LastRecommendContent;
