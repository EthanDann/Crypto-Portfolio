import { useWindowSize } from "usehooks-ts";
import { LoginButton } from "components";
import { Wrapper, Header } from "./AuthModal.styled";

interface Props {
  height: number;
}

const AuthModal: React.FC<Props> = () => {
  const { height: screenHeight } = useWindowSize();
  return (
    <Wrapper height={screenHeight}>
      <Header>Please Login!</Header>
      <LoginButton />
    </Wrapper>
  );
};

export default AuthModal;
