import React from "react";
import { MainContent, MainSection } from './Content.styles'


export const BodyContent: React.FC = () => {
    return (
        <>
            <MainContent>Learn to code by watching others <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable. </p></MainContent>
            <MainSection><span>Try it free 7 days</span> then $20/mo. thereafter </MainSection>
        </>
    )
}