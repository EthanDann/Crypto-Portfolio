import {
  Wrapper,
  ButtonSpan,
  RadioButton,
  ButtonLabel,
} from "./DurationSelector.styled";

interface Props {
  durations: any[];
  handleDurationClick: (d: object) => void;
}
interface Duration {
  duration: DurationProps;
}
interface DurationProps {
  duration: string;
  active: boolean;
}
export const DurationSelector: React.FC<Props> = ({
  durations,
  handleDurationClick,
}) => {
  return (
    <Wrapper>
      {durations.map(({ duration }: Duration) => (
        <ButtonSpan>
          <RadioButton
            type="radio"
            key={duration.duration}
            isSelected={duration.active}
            onClick={() => handleDurationClick(duration)}
          />
          <ButtonLabel>{duration.duration}</ButtonLabel>
        </ButtonSpan>
      ))}
    </Wrapper>
  );
};
