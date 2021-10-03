import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      header: string;
      background: string;
      input: string;
      text: string;
      text_secondary: string;
      text_terciary: string;
      icon: string;
    }
  }
}