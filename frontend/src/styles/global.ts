import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red-hero: #E02041;
        --principal-title: #13131A;
        --second-title: #41414D;
        --text: #737380;
        --second-text: #A8A8B3;
        --background: #F0F0F5;
        --input: #FFFFFF;
        --input-line: #DCDCE6;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 1120px;
        background: var(--background);
        height: 580px;
        padding: 96px;
        position: relative;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    }
`