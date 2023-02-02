import React from "react";
import * as FC from './Form.styles'


export const RegisterForm: React.FC = () => {
        return (
                <FC.MainFormView>

                        <FC.MainButton><span>Try it free 7 days</span> then $20/mo. thereafter </FC.MainButton>
                        <FC.StyledForm>
                                <FC.StyledInput placeholder="First Name" />
                                <FC.StyledInput placeholder="Last Name" />
                                <FC.StyledInput placeholder="Email Adress" />
                                <FC.StyledInput type="password" placeholder="Password" />
                                <FC.StyledButton type="submit">CLAIM YOUR FREE TRIAL</FC.StyledButton>
                                <FC.StyledP>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></FC.StyledP>
                        </FC.StyledForm>

                </FC.MainFormView>
        )

}