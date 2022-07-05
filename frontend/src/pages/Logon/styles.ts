import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SectionForm = styled.section`
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;

    svg {
        margin-right: 18px;
    }

    div {
        cursor: pointer;
    }
`

export const Form = styled.form`
    margin-top: 100px;

    h1 {
        color: var(--principal-title);
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
        margin-bottom: 32px;
    }

    input {
        width: 100%;
        height: 60px;
        border: 1.5px solid var(--input-line);
        border-radius: 8px;
        font-size: 18px;
        padding-left: 24px;
        color: var(--text);        
        
        &::placeholder {
            color: var(--second-text);
        }
    }
`

export const Button = styled.button`
    background: var(--red-hero);
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: 0;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 40px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    line-height: 60px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`

export const Link = styled.a`
    cursor: pointer;
    
    &:hover {
        color: var(--red-hero);
    }
`