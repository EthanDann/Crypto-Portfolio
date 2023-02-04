import { useWindowSize } from "usehooks-ts";
import { LoginButton } from "components";
import { Wrapper, Header } from "./AuthModal.styled";

const AuthModal = () => {
  const { height: screenHeight } = useWindowSize();
  return (
    <Wrapper height={screenHeight}>
      <Header>Please Login!</Header>
      <LoginButton />
    </Wrapper>
  );
};

export default AuthModal;
