import { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import BackToUp from "@uiw/react-back-to-top";
import { sortCoins } from "store/coinList/action";
import { CoinListRow } from "components";
import {
  TableContainer,
  CoinTable,
  ScrollableDiv,
  ScrollText,
  TableHeader,
  HeaderTr,
  Styledth,
  FilterContainer,
  FilterIcon,
} from "./CoinListTable.styled";

const CoinListTable = (props, { history }) => {
  const [element, setElement] = useState();
  const navigate = useNavigate();
  useEffect(() => setElement($dom.current), []);
  const {
    currencySymbol,
    isLoading,
    hasError,
    error,
    coinList,
    sortBy,
    sortAsc,
  } = props;
  const $dom = useRef(null);

  const handleFilter = (value, sortAsc) => {
    const params = new URLSearchParams();
    props.sortCoins(value, sortAsc);
    params.append("sortBy", sortBy);
    params.append("sortAsc", sortAsc);
    navigate({ search: params.toString() });
  };
  useEffect(() => {
    handleFilter(sortBy, sortAsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                  <Styledth>
                    <FilterContainer
                      onClick={() => handleFilter("name", sortAsc)}
                    >
                      Name
                      <FilterIcon />
                    </FilterContainer>
                  </Styledth>
                  <Styledth>
                    <FilterContainer
                      onClick={() => handleFilter("current_price", sortAsc)}
                    >
                      Price
                      <FilterIcon />
                    </FilterContainer>
                  </Styledth>
                  <Styledth>
                    <FilterContainer
                      onClick={() =>
                        handleFilter(
                          "price_change_percentage_1h_in_currency",
                          sortAsc
                        )
                      }
                    >
                      1h
                      <FilterIcon />
                    </FilterContainer>
                  </Styledth>
                  <Styledth>
                    <FilterContainer
                      onClick={() =>
                        handleFilter(
                          "price_change_percentage_24h_in_currency",
                          sortAsc
                        )
                      }
                    >
                      24h
                      <FilterIcon />
                    </FilterContainer>
                  </Styledth>
                  <Styledth>
                    <FilterContainer
                      onClick={() =>
                        handleFilter(
                          "price_change_percentage_7d_in_currency",
                          sortAsc
                        )
                      }
                    >
                      7d
                      <FilterIcon />
                    </FilterContainer>
                  </Styledth>
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

const mapStateToProps = (state) => ({
  sortBy: state.coins.sortBy,
  sortAsc: state.coins.sortAsc,
});
const mapDispatchToProps = {
  sortCoins,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinListTable);
