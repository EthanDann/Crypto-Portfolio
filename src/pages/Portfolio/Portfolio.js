import { useState, useEffect } from "react";
import { connect } from "react-redux";
import BackToUp from "@uiw/react-back-to-top";
import getSymbolFromCurrency from "currency-symbol-map";
import { useWindowSize } from "usehooks-ts";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getCoinHistory, getCoinData } from "store/portfolio/portfolioSlicer";
import { AssetRow, ArrowAnimation, Modal } from "components";
import {
  Container,
  ButtonContainer,
  Button,
  Row,
  Header,
} from "./Portfolio.styled";

const Portfolio = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { assets, hasError, error } = useAppSelector(
    (state) => state.portfolio
  );
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

const mapStateToProps = (state) => ({
  assets: state.portfolio.assets,
  hasError: state.portfolio.hasError,
  error: state.portfolio.error,
});
const mapDispatchToProps = {
  getCoinHistory,
  getCoinData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
