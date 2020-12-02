import styled from 'styled-components';

export const Title = styled.div `
    margin-top: 100px;
    display:flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin-top: 20px;
        color:#9400d3;
    }

    h1 {
       font-size: 60px;
    }
`;

export const Events = styled.div `
    margin-top: 40px;
    max-width: 700px;
    background: #fff;
    border-radius: 10px;
    padding: 24px;
    display: block;

    display: flex;
    align-items: center;

    img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }

    div#icon {
        display: inline;
    }


    img#like {
        width: 30px;
        margin-right: 8px;
    }

    img#dislike {
        width: 30px;
        margin-left: 8px;
    }


    table {
        margin-left: 30px;

        strong {
            font-size: 20px;
            font-weight: bold;
        }

        p {
            font-size: 18px;
            color: #a8a8b3;
            margin-top: 4px;
        }
    }

`;

export const Subtitulo = styled.sub `
    margin-top: 20px;
    display: flex;

    a {
        text-decoration: none;
    }
`;


