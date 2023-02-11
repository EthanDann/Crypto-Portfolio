import {
  CoinLinkContainer,
  IconContainer,
  SiteLink,
} from "./SummaryLink.styled";
import { ReactComponent as ChainIcon } from "./ChainIcon.svg";
import { ReactComponent as TabsIcon } from ".//TabsIcon.svg";

interface Props {
  url: string;
}

export const SummaryLink: React.FC<Props> = ({ url }) => {
  return (
    <CoinLinkContainer>
      <IconContainer>
        <ChainIcon />
      </IconContainer>
      <SiteLink target="_blank" href={url}>
        {url}
      </SiteLink>
      <IconContainer>
        <TabsIcon />
      </IconContainer>
    </CoinLinkContainer>
  );
};
