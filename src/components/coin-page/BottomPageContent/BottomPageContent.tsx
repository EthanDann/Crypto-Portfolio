import { SummaryLink, CurrencyConverter, TimeChartWrapper } from "components";
import {
  Container,
  CoinLinksContainer,
  Link,
  DescriptionContainer,
  Description,
  Header,
} from "./BottomPageContent.styled";

interface Props {
  coin: CoinProps;
  currencySymbol: string | undefined;
  activeCurrency: string | any;
  theme: string;
  id: string | undefined;
}
interface CoinProps {
  description: any;
  links: LinkProps;
  symbol: string;
  market_data: MarketData;
}
interface LinkProps {
  blockchain_site: string[];
}
interface MarketData {
  current_price: number[];
}

export const BottomPageContent: React.FC<Props> = ({
  coin,
  currencySymbol,
  activeCurrency,
  theme,
  id,
}) => {
  console.log(coin);
  const { description, links, symbol, market_data } = coin;
  const { blockchain_site } = links;
  const { current_price } = market_data;
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
