import {
  FillerDiv,
  ArrowContainer,
  Circle,
  Arrow,
  Pulse,
} from "./ArrowAnimation.styled";

const ArrowAnimation = () => {
  return (
    <FillerDiv>
      <ArrowContainer>
        <Circle>
          <Arrow>↑</Arrow>
        </Circle>
        <Pulse></Pulse>
      </ArrowContainer>
      Add an Asset!
    </FillerDiv>
  );
};

export default ArrowAnimation;
