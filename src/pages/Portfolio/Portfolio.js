import { useState, useEffect } from "react";
import { connect } from "react-redux";
import BackToUp from "@uiw/react-back-to-top";
import { useWindowSize } from "usehooks-ts";
import { getCoinHistory, getCoinData } from "store/portfolio/action";
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
  const { currencySymbol, assets, getCoinData, getCoinHistory } = props;
  const { height: screenHeight } = useWindowSize();
  const handleCoinData = () => {
    getCoinHistory();
    getCoinData();
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
        {assets && <Header>Your Statistics</Header> && (
          <AssetRow currencySymbol={currencySymbol} />
        )}
        {props.hasError && <Row>{props.error}</Row>}
        <BackToUp>Top</BackToUp>
      </Container>
      {isOpen && (
        <Modal
          handleCoinData={() => handleCoinData()}
          handleOpen={() => handleOpen()}
          currencySymbol={currencySymbol}
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
