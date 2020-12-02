import styled from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1`
    font-size: 60px;
    margin-top: 100px;
`;

export const Form = styled.form `
    margin-top: 40px;
    max-width: 700px;

    input {
        margin-top: 10px;
        width: 500px;
        height: 70px;
        padding: 0 25px;
        border: 0;
        border-radius: 5px;
    }

    button {
        margin-top: 50px;
        width: 550px;
        height: 50px;
        background: #9400d3;
        border-radius: 50px;
        border: 0;
        color: white;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#9400d3')};
        }
    }

    a{
        text-decoration: none;
        margin-left: 255px;
        margin-top: 40px;
        font: 15px Roboto;
        font-weight: bold;
        display: inline-block;
        position: relative;
    }
`;