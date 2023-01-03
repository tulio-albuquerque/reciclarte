import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-green-100: #011B0C;
        --color-green-90: #022E15;
        --color-grey-100: #7A7A7A;
        --color-grey-90: #969696;
        --color-grey-70: #848484;
        --color-grey-60: #D2D2D2;
        --color-grey-50: #F5F5F5;
        --color-orange-80: #F7941D;
        --color-white: #FFFFFF;

        --font-size-40: 2.5rem;
        --font-size-24: 1.5rem;
        --font-size-16: 1rem;
        --font-size-12: 0.75rem;

        --radius-1: 8px;
    }

    a {
        text-decoration: none;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        text-align: center;
    }
    
    input, select {
        border: none;
        outline: none;
    }

    ul {
        list-style-type: none;
    }
`