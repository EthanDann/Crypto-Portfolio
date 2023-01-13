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
  const { coin } = props.coin;
  const activeCurrency = props.activeCurrency.toLowerCase();
  return (
    <Container>
      <Header>Description</Header>
      <DescriptionContainer>
        <Description
          dangerouslySetInnerHTML={{ __html: coin.description.en }}
        />
      </DescriptionContainer>
      <CoinLinksContainer>
        <Link>
          <SummaryLink url={coin.links.blockchain_site[0]} />
        </Link>
        <Link>
          <SummaryLink url={coin.links.blockchain_site[1]} />
        </Link>
        <Link>
          <SummaryLink url={coin.links.blockchain_site[2]} />
        </Link>
      </CoinLinksContainer>
      <CurrencyConverter
        activeCurrency={props.activeCurrency}
        currencySymbol={props.currencySymbol}
        coinSymbol={coin.symbol.toUpperCase()}
        coinPrice={coin.market_data.current_price[activeCurrency]}
        theme={props.theme}
      />
      <TimeChartWrapper
        coinId={props.id}
        activeCurrency={props.activeCurrency}
      />
    </Container>
  );
};
