import { useState, useEffect } from "react";
import BackToUp from "@uiw/react-back-to-top";
import { useAuth0 } from "@auth0/auth0-react";
import { useWindowSize } from "usehooks-ts";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getCoinHistory, getCoinData } from "store/portfolio/portfolioSlicer";
import { AssetRow, ArrowAnimation, Modal, AuthModal } from "components";
import {
  Container,
  ButtonContainer,
  Button,
  Row,
  Header,
} from "./Portfolio.styled";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { assets, hasError, error } = useAppSelector(
    (state) => state.portfolio
  );
  const { user, isAuthenticated } = useAuth0();

  const dispatch = useAppDispatch();
  const { height: screenHeight } = useWindowSize();
  const handleCoinData = () => {
    dispatch(getCoinHistory());
    dispatch(getCoinData());
  };
  const handleOpen = () => setIsOpen(!isOpen);
  useEffect(() => {
    handleCoinData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) return <AuthModal />;
  return (
    <>
      <Container height={screenHeight} isOpen={isOpen} assets={assets}>
        <ButtonContainer>
          <Button onClick={() => handleOpen()}>Add Asset</Button>
        </ButtonContainer>
        {assets.length === 0 && <ArrowAnimation />}
        {assets && <Header>Your Statistics</Header> && <AssetRow />}
        {hasError && <Row>{error}</Row>}
        <BackToUp>Top</BackToUp>
      </Container>
      {isOpen && (
        <Modal
          handleCoinData={() => handleCoinData()}
          handleOpen={() => handleOpen()}
        />
      )}
    </>
  );
};

export default Portfolio;
