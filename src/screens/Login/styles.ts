import styled from 'styled-components';

export const LoginBox = styled.div`
    width: 350px;
    height: 700px;
    margin: 0 auto;
    margin-top: 100px;

    background-color: #fff;
    padding: 80px 40px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    img {
        width: 50px;
        align-self: center;
    }

    h1 {
        color: #5685b1;
        text-align: center;
    }

    span {
        text-align: center;
        color: gray;
    }

    a {
        color: #5685b1;
        text-decoration: none;

        &:hover {
            color: #3685b9;
        }
    }

    .recoverPassword {
        font-size: 14px;
        padding: 15px 0;
        text-align: end;
    }

    .signupText {
        font-size: 14px;
        padding: 15px 0;
        text-align: center;
    }

    .inputs {
        margin-top: 40px
    }

    input {
        padding: 10px 5px;
        border: 1px solid #5685b144;
        border-radius: 5px;
    }

    label {
        font-size: 14px;
    }

`;

export const Button = styled.button`
    padding: 10px 5px;
    border: 0;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    background-color: #5685b1;
    transition: .2s;

    &:hover {
        background-color: #3685b9;
    }
`;
export const GoogleButton = styled.button`
    padding: 10px 5px;
    border: 1px solid #5685b144;
    cursor: pointer;
    border-radius: 5px;
    background-color: #fff;
    transition: .2s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin-top: 10px;

    transition: all.3s;

    img {
        width: 50px;
    }

    &:hover {
        border: 1px solid #5685b1;
    }
`;