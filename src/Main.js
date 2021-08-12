import React from 'react';
import styled from 'styled-components';



const MainDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 80%;
`
const MainParagraph = styled.p`
    width: 60%;
    font-size: 2rem;
`

function Main(props){
    const { image, caption } = props;


    return(
        <div>
        
        <MainDiv>
            <img src={`${image}`} />
            <MainParagraph>{caption}</MainParagraph>
        </MainDiv>
        </div>
    )
}





export default Main;