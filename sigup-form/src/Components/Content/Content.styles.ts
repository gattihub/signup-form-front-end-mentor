import styled from 'styled-components';



export const MainSection = styled.button`
background-color: ${props => props.theme.colors.Blue};
border-radius: 5px;
border:none;
padding: 15px 60px;
cursor:pointer;
color: ${props => props.theme.colors.primary};

span {
    font-weight:bold;
}
`

export const MainContent = styled.h1`
    color: ${props => props.theme.colors.primary};
    
    p {
        font-size: 1rem;
        font-weight: none;
    }
   
`

