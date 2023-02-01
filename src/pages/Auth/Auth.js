import { useWindowSize } from "hooks";
import { LoginButton } from "components";
import { Wrapper, Header } from "./Auth.styled";

const Auth = (props) => {
  const { height: screenHeight } = useWindowSize();
  return (
    <Wrapper height={screenHeight}>
      <Header>Please Login!</Header>
      <LoginButton />
    </Wrapper>
  );
};

export default Auth;
