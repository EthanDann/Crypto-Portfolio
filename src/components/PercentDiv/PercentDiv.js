import { Td, StyledPercentDiv } from "./PercentDiv.styled";

const PercentDiv = (props) => {
  return (
    <>
      <Td>
        <StyledPercentDiv type={props.hourType}>
          {props.hourText}
        </StyledPercentDiv>
      </Td>
      <Td>
        <StyledPercentDiv type={props.dayType}>
          {props.dayText}
        </StyledPercentDiv>
      </Td>
      <Td>
        <StyledPercentDiv type={props.weekType}>
          {props.weekText}
        </StyledPercentDiv>
      </Td>
    </>
  );
};

export default PercentDiv;
