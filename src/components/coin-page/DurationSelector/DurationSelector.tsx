import {
  Wrapper,
  ButtonSpan,
  RadioButton,
  ButtonLabel,
} from "./DurationSelector.styled";

interface Props {
  durations: Duration[];
  handleDurationClick: (duration: Duration) => void;
}
interface Duration {
  duration: string;
  active: boolean;
}
export const DurationSelector: React.FC<Props> = ({
  durations,
  handleDurationClick,
}) => {
  return (
    <Wrapper>
      {durations.map(({ duration, active }: Duration) => (
        <ButtonSpan>
          <RadioButton
            type="radio"
            key={duration}
            isSelected={active}
            onClick={() => handleDurationClick({ duration, active })}
          />
          <ButtonLabel>{duration}</ButtonLabel>
        </ButtonSpan>
      ))}
    </Wrapper>
  );
};
