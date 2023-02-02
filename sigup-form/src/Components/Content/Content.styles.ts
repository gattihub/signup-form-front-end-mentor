import styled from 'styled-components';


export const MainView = styled.div`
display: flex;
text-align:center;
align-items:center;

@media (min-width: 1024px) {
        text-align:left;
        justify-content:center;
        max-width:50%;
    }  
`

export const Container = styled.div`
@media (min-width: 1024px) {
        max-width:60%;
    }  
`

export const MainContent = styled.h1` 

    `
export const MainContentP = styled.p`   
    font-size: 1rem;
    `




