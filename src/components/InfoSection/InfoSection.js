import React from 'react'
import styled from 'styled-components'
import { SliderData } from '../../Data/SliderData'
import Slider from './Slider' 

const Section = styled.div`
    background-color: #202020;
    align-items: center;
    font-family: 'Poppins';
    
    h1{
        font-family: 'Poppins';
        padding-top: 12px;
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;
        
        
    }
`;
const Container = styled.div`
    display: block; 
    background-color: black;
    justify-content: center;
    align-items: center;
    
`; 
const Content = styled.div`
 
`;
const YearSection = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    margin-top: 10px;
    width: 100%;
    height: 70vh;

`;

const Info = styled.div`
    
    color: black;
    width: 40vw;
    align-self: flex-end;
    height: 40vh;
    border-radius: 20px;
    padding: 20px;
    /* margin-top: 490px; */
    /* margin-left: 24px;
    margin-right: 24px; */
    margin-bottom: 10px;
    background-color: white;
    justify-content: center;
    align-items: center;
    
    p{
        font-size: small;
    }
  
`;
// const Section = styled.div``;


const InfoSection = ({infoData}) => {
    return (
       
            <Section>
                <h1>Down Memory Lane</h1>

                {infoData.map( (info,index) => {return(
                     
                    <Container>
                        <h1>{info.year}</h1>
                        <YearSection>
                        <Slider slides = {SliderData}>
                        </Slider>
                        <Content>
                       
                        <Info> 
                            <h2>{info.year}</h2>    
                            <h3>{info.heading}</h3>
                            <p>{info.paragraphOne}</p>
                        </Info>
                        </Content>
                        </YearSection>
                    </Container>
                )})}
                
            </Section>
        
    )
}

export default InfoSection
