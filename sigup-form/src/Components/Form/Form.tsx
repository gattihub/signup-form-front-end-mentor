import React from "react";
import * as FC from './Form.styles'

export const RegisterForm: React.FC = () => {
    return (
    <>
    <FC.StyledForm>
            <FC.StyledInput placeholder="First Name"/>
            <FC.StyledInput placeholder="Last Name"/>
            <FC.StyledInput placeholder="Email Adress"/>
            <FC.StyledInput type="password" placeholder="Password"/>
            <FC.StyledButton type="submit">CLAIM YOUR FREE TRIAL</FC.StyledButton>
            <FC.StyledP>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></FC.StyledP>
    </FC.StyledForm>
    
    </>
        )

}