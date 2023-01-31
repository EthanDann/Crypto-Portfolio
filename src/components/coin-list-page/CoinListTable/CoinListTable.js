import { useRef, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BackToUp from "@uiw/react-back-to-top";
import { CoinListRow } from "components";
import {
  TableContainer,
  CoinTable,
  ScrollableDiv,
  ScrollText,
  TableHeader,
  HeaderTr,
  Styledth,
} from "./CoinListTable.styled";

const CoinListTable = (props) => {
  const [element, setElement] = useState();
  useEffect(() => setElement($dom.current), []);
  const { currencySymbol, isLoading, hasError, error, coinList } = props;
  const $dom = useRef(null);
  return (
    <TableContainer>
      {isLoading && <span>Fetching all coins...</span>}
      {
        <ScrollableDiv id="scrollableDiv" ref={$dom}>
          <InfiniteScroll
            dataLength={coinList.length}
            next={props.next}
            hasMore={true}
            loader={<ScrollText>Loading...</ScrollText>}
            scrollableTarget={"scrollableDiv"}
            endMessage={<ScrollText>Yay! You have seen it all</ScrollText>}
          >
            <CoinTable>
              <TableHeader>
                <HeaderTr>
                  <Styledth>#</Styledth>
                  <Styledth>Name</Styledth>
                  <Styledth>Price</Styledth>
                  <Styledth>1h</Styledth>
                  <Styledth>24h</Styledth>
                  <Styledth>7d</Styledth>
                  <Styledth>24h Vol / Market Cap</Styledth>
                  <Styledth>Circulating / Total Sup</Styledth>
                  <Styledth>Last 7d</Styledth>
                </HeaderTr>
              </TableHeader>
              <CoinListRow
                coinList={coinList}
                currencySymbol={currencySymbol}
              />
            </CoinTable>
          </InfiniteScroll>
          <BackToUp element={$dom.current} style={{ float: "right" }}>
            Top
          </BackToUp>
        </ScrollableDiv>
      }
      {hasError && (
        <span>
          There was an error: <br />${error}
        </span>
      )}
    </TableContainer>
  );
};

export default CoinListTable;
