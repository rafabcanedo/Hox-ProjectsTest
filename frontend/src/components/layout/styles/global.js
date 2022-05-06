import { createGlobalStyle } from 'styled-components'
import "@fontsource/sora"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Sora', sans-serif;
    transition: all 0.25s linear;
  }
`