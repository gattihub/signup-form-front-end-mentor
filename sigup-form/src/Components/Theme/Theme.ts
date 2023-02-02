declare module 'styled-components' {
    export interface DefaultTheme {  
      colors: {
        primary: string;
        secondary: string;
        Red: string;
        Green: string;
        Blue: string;
        DarkBlue: string;
        GrayishBlue: string;
      };
    }
  }


export const theme = {
    colors: {
        primary: '#FFF',
        secondary: '#000',
        Red: 'hsl(0, 100%, 74%)',
        Green: 'hsl(154, 59%, 51%)',
        Blue: 'hsl(248, 32%, 49%)',
        DarkBlue: 'hsl(249, 10%, 26%)',
        GrayishBlue: 'hsl(246, 25%, 77%)'
    }
}