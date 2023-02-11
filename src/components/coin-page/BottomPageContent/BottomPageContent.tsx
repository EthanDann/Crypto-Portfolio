import { SummaryLink, CurrencyConverter, TimeChartWrapper } from "components";
import {
  Container,
  CoinLinksContainer,
  Link,
  DescriptionContainer,
  Description,
  Header,
} from "./BottomPageContent.styled";
import { Props } from "./BottomPageContent.types";

export const BottomPageContent: React.FC<Props> = ({
  coin,
  activeCurrency,
  theme,
  id,
}) => {
  const { description, links, symbol, market_data } = coin;
  return (
    <Container>
      <Header>Description</Header>
      <DescriptionContainer>
        <Description dangerouslySetInnerHTML={{ __html: description.en }} />
      </DescriptionContainer>
      <CoinLinksContainer>
        <Link>
          <SummaryLink url={links.blockchain_site[0]} />
        </Link>
        <Link>
          <SummaryLink url={links.blockchain_site[1]} />
        </Link>
        <Link>
          <SummaryLink url={links.blockchain_site[2]} />
        </Link>
      </CoinLinksContainer>
      <CurrencyConverter
        activeCurrency={activeCurrency}
        coinSymbol={symbol.toUpperCase()}
        coinPrice={market_data.current_price[activeCurrency.toLowerCase()]}
        theme={theme}
      />
      <TimeChartWrapper id={id} currency={activeCurrency} />
    </Container>
  );
};
