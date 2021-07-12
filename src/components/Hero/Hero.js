import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button';


const HeroSection = styled.div`
    top: 0;
    right: 0;
    left: 0;
    background: url('../images/bg4.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    width:100%;
    margin: 0 0;
    height:90vh;
`;

// const HeroWrapper = styled.div`
//     /* display: block; */
//     /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
//     align-items: center;
//     justify-content: center;
//     padding: 70px 24px;
// `;

const HeroContainer = styled.div`
    padding: 2vw;
    text-decoration: none;
    font-size: 48px;
    color: white;

    img{
        margin-bottom: -1vw;
    }
    @media screen and (max-width: 768px){
        font-size: 5vw;
        margin: 24px;
        margin-top: 10vw;
    }    
`;

const BtnContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
   

    @media screen and (min-width: 768px){
        margin-top:-2vw;
    }

`;



function Hero() {
    return (
        
            <HeroSection>
                {/* <HeroWrapper> */}
                    <HeroContainer>
                        <img src={"/images/actualLogo.png"} alt='logo'></img>
                        <h1>TOMORROW<br/>LAND</h1>
                    </HeroContainer>

                    <BtnContainer>
                        <Button to='/bookings' primary='true'>Book Tickets</Button>
                    </BtnContainer>
                {/* </HeroWrapper> */}
            </HeroSection>
        
     
    )
}

export default Hero
