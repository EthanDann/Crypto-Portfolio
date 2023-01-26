import styled, { keyframes } from "styled-components";

export const FillerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 430px;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.fontColor};
  font-size: 3rem;
  @media (min-width: 1024px) {
    background: ${(props) => props.theme.secondary};
  }
  @media (max-width: 425px) {
    min-height: 475px;
  }
`;
export const ArrowContainer = styled.div`
   {
    height: 120px;
    width: 120px;
    margin: 3rem auto 0;
    position: relative;
  }
`;
const ArrowAnimation = keyframes`
  {
  0%   {bottom:0;}
  75% {bottom:90px;}
  100% {bottom:0;}
  }
  `;
const CircleAnimation = keyframes`
  {
  0%   {height:120px;}
  10% {height: 120px;}
  50% {height: 130px;}
  75% {height: 150px;}
  90% {height: 130px;}
  100% {height: 120px;}
  }
  `;
const PulseAnimation = keyframes` {       
  0% {transform: scale(0); opacity: 0;}
  8% {transform: scale(0); opacity: 0;}
  15% {transform: scale(0.1); opacity: 1;}
  30% {transform: scale(0.5); opacity: 1;}
  100% {opacity: 0; transform: scale(1.5);}
}`;
export const Circle = styled.span`
   {
    background-color: transparent;
    height: 120px;
    width: 120px;
    display: block;
    border: 5px solid rgb(6, 213, 84);
    border-radius: 100px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    animation-name: ${CircleAnimation};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-play-state: running;
  }
`;
export const Arrow = styled.i`
   {
    font-size: 42px;
    color: rgb(6, 213, 84);
    bottom: 27px;
    position: absolute;
    left: 50%;
    margin-left: -18px;
    animation-name: ${ArrowAnimation};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-play-state: running;
  }
`;
export const Pulse = styled.span`
   {
    margin: 0 auto;
    border-radius: 100px;
    position: absolute;
    left: 2px;
    bottom: 0px;
    z-index: 0;
    opacity: 0;
    width: 110px;
    height: 110px;
    border: 10px solid rgb(6, 213, 84);
    border-radius: 100px;
    animation: ${PulseAnimation} 1s linear infinite 0.3s;
  }
`;
