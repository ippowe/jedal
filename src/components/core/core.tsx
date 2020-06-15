import React, { useEffect } from "react";
import storage from "../../utils/storage";
import { useMutation } from "@apollo/react-hooks";
import { isEmpty, isNil } from "lodash";
import { gql } from "apollo-boost";
import { createGlobalStyle } from "styled-components";
import { IThemeWrapper } from "../../pages/_app";
import Toast from "../Toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { setUserId } from "../../modules/user";

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  @font-face {
    font-family: 'GmarketSans';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/GmarketSansTTFMedium.ttf');
  }
  @font-face {
    font-family: 'GmarketSans';
    font-style: normal;
    font-weight: bold;
    src: url('/fonts/GmarketSansTTFBold.ttf');
  }
    @font-face {
    font-family: 'NotoSansCJKkr';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/NotoSansKR-Light.otf');
  }
  @font-face {
    font-family: 'NotoSansCJKkr';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/NotoSansKR-Regular.otf');
  }
    @font-face {
    font-family: 'NotoSansCJKkr';
    font-style: normal;
    font-weight: bold;
    src: url('/fonts/NotoSansKR-Black.otf');
  }
  body {
    margin: 0 auto;
    max-width: 540px;
    min-height: 100vh;
    font-family: "GmarketSans", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    font-family : inherit;
    border: none;
    &:focus {
      outline: 0;
    }
  }
  
  a {text-decoration: none;}
`;

const FIRST_JOIN = gql`
    mutation firstJoin {
        firstJoin {
            _id
            skipIntro
            lastLogin
        }
    }
`;
const Core: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }: RootState) => user);
  const [firstJoin, { loading }] = useMutation(FIRST_JOIN, {
    onCompleted: (data) => {
      dispatch(setUserId(data.firstJoin?._id));

    }
  });

  useEffect(() => {
    if (isEmpty(user) === true) {
      const userId = storage.getItem("USER_ID");

      if (isNil(userId) === true) {
        firstJoin();
      } else {
        dispatch(setUserId(userId));
      }
    }

  }, []);

  return (
    <>
      <GlobalStyle/>
      <Toast/>
    </>
  );
};

export default Core;
