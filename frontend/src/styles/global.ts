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
`