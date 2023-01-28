import { SummaryLink, CurrencyConverter, TimeChartWrapper } from "components";
import {
  Container,
  CoinLinksContainer,
  Link,
  DescriptionContainer,
  Description,
  Header,
} from "./BottomPageContent.styled";

export const BottomPageContent = (props) => {
  const { coin, currencySymbol, theme, id } = props;
  const { description, links, symbol, market_data } = coin;
  const { blockchain_site } = links;
  const { current_price } = market_data;
  const activeCurrency = props.activeCurrency.toLowerCase();
  return (
    <Container>
      <Header>Description</Header>
      <DescriptionContainer>
        <Description dangerouslySetInnerHTML={{ __html: description.en }} />
      </DescriptionContainer>
      <CoinLinksContainer>
        <Link>
          <SummaryLink url={blockchain_site[0]} />
        </Link>
        <Link>
          <SummaryLink url={blockchain_site[1]} />
        </Link>
        <Link>
          <SummaryLink url={blockchain_site[2]} />
        </Link>
      </CoinLinksContainer>
      <CurrencyConverter
        activeCurrency={activeCurrency}
        currencySymbol={currencySymbol}
        coinSymbol={symbol.toUpperCase()}
        coinPrice={current_price[activeCurrency]}
        theme={theme}
      />
      <TimeChartWrapper coinId={id} activeCurrency={activeCurrency} />
    </Container>
  );
};
