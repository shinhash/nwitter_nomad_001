import styled from "styled-components";

/**
 * CreateAccount, Login, ResetPassword
 */
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 50px 0px;
`;

export const Title = styled.h1`
    font-size: 42px;
`;

export const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const Input = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
    &[type="submit"] {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`;

export const Error = styled.span`
    font-weight: 600;
    color: tomato;
`;

export const Switcher = styled.span`
    margin-top: 20px;
    a {
        color: #1d9bf0;
    }
`;


/**
 * GithubButton
 */
export const Button = styled.span`
    background-color: white;
    font-weight: 500;
    width: 100%;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    color: black;
    cursor: pointer;
`;

export const Logo = styled.img`
    height: 25px;
`;


/**
 * PostNweetForm
 */
export const NweetForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const NweetTextArea = styled.textarea`
    border: 2px solid white;
    padding: 20px;
    border-radius: 20px;
    font-size: 16px;
    color: white;
    background-color: black;
    width: 100%;
    resize: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
                Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &::placeholder{
        font-size: 16px;
    }
    &:focus{
        outline: none;
        border-color: #1d9bf0;
    }
`;

export const NweetAttachFileButton = styled.label`
    padding: 10px 0px;
    color: #1d9bf0;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #1d9bf0;
    font-size: 14px;
    font-weight: 600;
    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 0.7;
    }
`;

export const NweetAttachFileInput = styled.input`
    display: none;
`;

export const NweetSubmitBtn = styled.input`
    background-color: #1d9bf0;
    color: white;
    border: none;
    padding: 10px 0px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 0.7;
    }
`;