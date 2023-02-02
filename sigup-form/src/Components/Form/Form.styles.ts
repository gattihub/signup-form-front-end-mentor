import styled from 'styled-components'


export const MainFormView = styled.div`
display: block;
padding:5%;

@media (min-width: 1024px) {
    max-width: 400px;
}
`

export const MainButton = styled.button`
background-color: ${props => props.theme.colors.Blue};
border-radius: 5px;
border:none;
padding: 15px 60px;
cursor:pointer;
color: ${props => props.theme.colors.primary};
width:100%;


span {
    font-weight:bold;
}
`

export const StyledForm = styled.form`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;    
    padding:25px;
    margin-top:5%;

    @media (min-width: 1024px) {
        margin-top:2%;
    }
    
    `

export const StyledInput = styled.input`
    width:89%;
    margin:0px;
    margin-bottom: 15px; 
    padding:10px 0px 10px 25px;
    border-radius: 5px;
    border: solid 1px ${props => props.theme.colors.GrayishBlue};
    font-weight:600;
    
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
    letter-spacing: .1rem;
    font-weight:500;
    
`

export const StyledP = styled.p`
    color: ${props => props.theme.colors.GrayishBlue};
    font-size: 0.7rem;
    text-align:center;

    a {
        color: ${props => props.theme.colors.Red};
        cursor:pointer;
        text-decoration:none;
    }
`

