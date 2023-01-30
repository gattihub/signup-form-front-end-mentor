import {ThemeProvider, createGlobalStyle} from 'styled-components'
import { useState } from 'react'
import {theme} from './Components/Theme/Theme'
import {BodyContent} from './Components/Content/Content'
import { RegisterForm } from './Components/Form/Form'




const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("../images/bg-intro-mobile.png");
    background-color: ${props => props.theme.colors.Red};
    display:flex;
    margin:30px;

  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <div className="App">
     <BodyContent />
    </div>
    <RegisterForm />
    </ThemeProvider>
  )
}

export default App
