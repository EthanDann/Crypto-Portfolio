import {
  CoinLinkContainer,
  IconContainer,
  SiteLink,
} from "./SummaryLink.styled";
import { ReactComponent as ChainIcon } from "./ChainIcon.svg";
import { ReactComponent as TabsIcon } from ".//TabsIcon.svg";

export const SummaryLink = (props) => {
  return (
    <CoinLinkContainer>
      <IconContainer>
        <ChainIcon />
      </IconContainer>
      <SiteLink target="_blank" href={props.url}>
        {props.url}
      </SiteLink>
      <IconContainer>
        <TabsIcon />
      </IconContainer>
    </CoinLinkContainer>
  );
};
