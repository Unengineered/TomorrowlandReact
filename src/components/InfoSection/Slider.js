import React ,{useState} from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import styled, {css} from 'styled-components/macro';
import {IoMdArrowRoundForward} from 'react-icons/io'


const SlideWrapper = styled.div`
    margin: 24px;
    width: 30vw;
    height: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    align-self: flex-start;
`;

const SlideShow = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const SliderSection = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    /* object-fit: contain; */
    justify-content: center;
`;

const SliderImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: all ease-in;

`;
const SliderButtons = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    /* bottom: 50px;
    right: 50px; */
    display: flex;
    z-index: 10;
`;

const arrowButtons = css`
    top: 50%;
    color:white;
    cursor: pointer;
    background:transparent;
    /* border: 2px;
    border-color:white; */
    position: absolute;
    border-radius:30px;
    padding:15px;
    user-select:none;
    transition:0.3s;
    
    &:hover{
        background: black;
        transform: scale(1.05);
    }`;


const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
    left: 2vw;
`;
const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
    
    right: 2vw;
`;

const Slider = ({slides}) => {

    const [current , setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () =>{
        setCurrent(current === length-1?0:current+1)
    }

    const prevSlide = () =>{
        setCurrent(current===0?length-1:current-1)
    }
    return (
        <div>
            <SlideWrapper>
                    {slides.map( (slide,index) => (
                      <SlideShow key={index}>
                          {index === current && (
                              <SliderSection>
                              <SliderImage src={slide.image} alt={slide.alt}/>
                        </SliderSection>
                          )}
                          
                      </SlideShow>  
                    ))}

                    <SliderButtons>
                        <PrevArrow onClick={prevSlide}/>
                        <NextArrow onClick={nextSlide}/>
                    </SliderButtons>
            </SlideWrapper>

        </div>
    )
}

export default Slider
