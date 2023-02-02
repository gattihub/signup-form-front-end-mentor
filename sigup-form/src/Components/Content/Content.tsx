import React from "react";
import { Container, MainContent, MainContentP, MainView } from './Content.styles'


export const BodyContent: React.FC = () => {
    return (
        <MainView>
            <Container>
                <MainContent>Learn to code by watching others </MainContent>
                <MainContentP>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable.</MainContentP>
            </Container>
        </MainView>
    )
}