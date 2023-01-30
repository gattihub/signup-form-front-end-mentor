import styled from 'styled-components'

export const StyledForm = styled.form`
    background-color: ${props => props.theme.colors.primary};
  
    border-radius: 5px;    
    padding:12px;
    margin-top:5%;
    `

export const StyledInput = styled.input`
    width:92%;
    margin:0px;
    margin-bottom: 10px; 
    padding:10px;
    border-radius: 5px;
    border: solid 1px ${props => props.theme.colors.GrayishBlue};
    font-weight:bold;
    `

export const StyledButton = styled.button`
    width:100%;
    margin:0px;
    margin-bottom: 10px; 
    padding:13px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.Green};
    color: ${props => props.theme.colors.primary};
    border:none;
    
`

export const StyledP = styled.p`
    color: ${props => props.theme.colors.GrayishBlue};
    font-size: 0.7rem;

    a {
        color: ${props => props.theme.colors.Red};
        cursor:pointer;
        text-decoration:none;
    }
`