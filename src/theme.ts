import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#fff',
    font: '#000'
}

export const darkTheme = {
    body: '#000',
    font: '#fff'
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
    }

`;