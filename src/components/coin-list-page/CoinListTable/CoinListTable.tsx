import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackToUp from "@uiw/react-back-to-top";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAllCoins, sortCoins } from "store/coinList/coinListSlicer";
import { CoinListRow } from "components";
import {
  TableContainer,
  CoinTable,
  ScrollableDiv,
  TableHeader,
  HeaderTr,
  Styledth,
  FilterContainer,
  FilterIcon,
} from "./CoinListTable.styled";

const CoinListTable = () => {
  const [element, setElement] = useState<HTMLElement | undefined>(undefined);
  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.currency);
  const { data, pageNum, hasError } = useAppSelector((state) => state.coins);
  useEffect(() => {
    dispatch(getAllCoins({ currency, pageNum }));
  }, [currency, pageNum]);
  const { sortBy, sortAsc } = useAppSelector((state) => state.coins);
  const navigate = useNavigate();
  const $dom = React.useRef<HTMLDivElement | undefined>(undefined);
  useEffect(() => setElement($dom.current), []);

  const handleFilter = (field: string, sortAsc: boolean) => {
    const params = new URLSearchParams();
    dispatch(sortCoins({ field, sortAsc }));
    params.append("sortBy", sortBy);
    params.append("sortAsc", sortAsc.toString());
    navigate({ search: params.toString() });
  };
  useEffect(() => {
    handleFilter(sortBy, sortAsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data && (
        <TableContainer>
          {
            <ScrollableDiv>
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
                <CoinListRow data={data} />
              </CoinTable>
              <BackToUp element={$dom.current} style={{ float: "right" }}>
                Top
              </BackToUp>
            </ScrollableDiv>
          }
          {hasError && (
            <span>
              There was an error.
              <br />
            </span>
          )}
        </TableContainer>
      )}
    </>
  );
};

export default CoinListTable;
