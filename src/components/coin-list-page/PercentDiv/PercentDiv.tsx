import { Td, StyledPercentDiv } from "./PercentDiv.styled";

interface Props {
  hourType: string;
  hourText: string;
  dayType: string;
  dayText: string;
  weekType: string;
  weekText: string;
}

const PercentDiv = ({
  hourType,
  hourText,
  dayType,
  dayText,
  weekType,
  weekText,
}: Props) => {
  return (
    <>
      <Td>
        <StyledPercentDiv type={hourType}>{hourText}</StyledPercentDiv>
      </Td>
      <Td>
        <StyledPercentDiv type={dayType}>{dayText}</StyledPercentDiv>
      </Td>
      <Td>
        <StyledPercentDiv type={weekType}>{weekText}</StyledPercentDiv>
      </Td>
    </>
  );
};

export default PercentDiv;
