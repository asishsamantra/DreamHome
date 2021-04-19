import React, { useState, useRef } from 'react';
import { Button } from './Button';
import styled, { css } from 'styled-components/macro';
import {
  IoMdArrowBack,
  IoMdArrowForward,
  IoMdArrowRoundForward,
} from 'react-icons/io';

const HeroSection = styled.div`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;
const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const HeroSlide = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
`;
const HeroSlider = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: white;

  h1 {
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 400rem;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 0.5rem;
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-right: 0.5rem;
`;
const SliderButton = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
`;
const arrowButton = css`
  height: 50px;
  width: 50px;
  background: #000d1a;
  color: white;
  border-radius: 50%;
  padding: 10px;
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.3s;
  z-index: 10;

  &:hover {
    background: #cd853f;
    transform: scale(1.1);
  }
`;
const PrevArrow = styled(IoMdArrowBack)`
  ${arrowButton}
`;
const NextArrow = styled(IoMdArrowForward)`
  ${arrowButton}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={index}>
            {index === current && (
              <HeroSlider>
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button
                    to={slide.path}
                    primary='true'
                    css={`
                      max-width: 170px;
                    `}
                  >
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButton>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButton>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
