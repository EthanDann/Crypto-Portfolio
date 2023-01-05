import {
  Wrapper,
  ButtonSpan,
  RadioButton,
  ButtonLabel,
} from "./DurationSelector.styled";

export const DurationSelector = (props) => {
  return (
    <Wrapper>
      {props.durations.map((duration) => (
        <ButtonSpan>
          <RadioButton
            type="radio"
            isSelected={duration.active}
            onClick={() => props.handleDurationClick(duration)}
          />
          <ButtonLabel>{duration.duration}</ButtonLabel>
        </ButtonSpan>
      ))}
    </Wrapper>
  );
};
