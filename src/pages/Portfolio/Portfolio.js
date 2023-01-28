import { useState, useEffect } from "react";
import { connect } from "react-redux";
import BackToUp from "@uiw/react-back-to-top";
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
  const { assets, getCoinData, getCoinHistory } = props;
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
      <Container isOpen={isOpen} assets={assets}>
        <ButtonContainer>
          <Button onClick={() => handleOpen()}>Add Asset</Button>
        </ButtonContainer>
        {assets && <Header>Your Statistics</Header> && <AssetRow />}
        {props.hasError && <Row>{props.error}</Row>}
        <BackToUp>Top</BackToUp>
      </Container>
      {assets.length === 0 && <ArrowAnimation />}
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
