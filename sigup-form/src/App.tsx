import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import { theme } from './Components/Theme/Theme'
import { BodyContent } from './Components/Content/Content'
import { RegisterForm } from './Components/Form/Form'



const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Poppins' , sans-serif;

    }


  body {
    background-image: url("../images/bg-intro-mobile.png");
    background-color: ${props => props.theme.colors.Red};
    display:flex;
    margin:30px;
    color:${props => props.theme.colors.primary};
    flex-direction:row;
    
    
    @media (min-width: 1024px) {
      background-image: url("../images/bg-intro-desktop.png");
    };

    #root {
      display:block;
      width:100%;
      @media (min-width: 1024px) {
      display:flex;
    } 
  }

  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
      <BodyContent />
      <RegisterForm />

    </ThemeProvider>
  )
}

export default App
