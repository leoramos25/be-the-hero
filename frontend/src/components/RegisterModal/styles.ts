import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const Info = styled.div`
    svg {
        margin-right: 20px;
    }

    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
`

export const InfoSection = styled.section`
    width: 390px;
    font-size: 18px;
    margin-top: 64px;
    margin-bottom: 84px;

    h1 {
        font-size: 36px;
        margin-bottom: 32px;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: var(--text);
    }
    
`

export const Form = styled.form`
    width: 450px;
    margin-left: 96px;

    input {
        width: 100%;
        height: 60px;
        border: 1.5px solid var(--input-line);
        border-radius: 8px;
        font-size: 18px;
        padding-left: 24px;
        color: var(--text);
        margin-bottom: 8px;

        &::placeholder {
            color: var(--second-text);
        }
    }
`

export const InputGroup = styled.div`
    display: flex;
    
    input + input {
        margin-left: 8px;
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