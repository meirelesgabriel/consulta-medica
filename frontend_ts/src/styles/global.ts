import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-border-box;
    }

    body{
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;
        font: 16px Lobster;
        color: #3a3a3a;
    }

    input, button, a, p, strong{
        font: 20px roboto;
        margin: 0;
        color: #3a3a3a;
    }

    #root {
        max-width: 550px;
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }

`;