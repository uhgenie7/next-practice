import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        padding: 0;
        margin: 0;
        font-family: Noto Sans, Noto Sans KR;
    }


    @media screen and (min-width: 1280px) {
        html {
            font-size: 24px;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1279px) {
        html {
            font-size: 30px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        html {
            font-size: 30px;
        }

    }

    @media screen and (max-width: 767px) {
        html, body {
            font-size: 15px;
        }
    }

`;

export default GlobalStyle;
