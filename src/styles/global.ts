import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --background: ${(props: any) => props.theme.colors.background};

  }
  
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box; 
  }

  //font-size: 16px;

  html {
    /* Configuração para redução do tamanho de fontes para dispositivos menores */
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16 * 0.9375 = 15px
    }
    @media (min-width: 720px) {
      font-size: 87,5%; //16 * 0.875 = 14px;
    }
  }

  // REM - 1 rem = 16px;

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; 
    /* Deixar as fontes mais nítidas com o webkit */
  }

  body, input, textarea, button, select {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
