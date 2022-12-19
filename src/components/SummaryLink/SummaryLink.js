import {
  CoinLinkContainer,
  IconContainer,
  SiteLink,
} from "./SummaryLink.styled";
import { ReactComponent as ChainIcon } from "./ChainIcon.svg";
import { ReactComponent as TabsIcon } from ".//TabsIcon.svg";

export const SummaryLink = (props) => {
  let icon = props.icon;
  return (
    <CoinLinkContainer icon={icon}>
      <IconContainer>
        <ChainIcon icon={icon} />
      </IconContainer>
      <SiteLink target="_blank" href={props.url}>
        {props.url}
      </SiteLink>
      <IconContainer>
        <TabsIcon icon={icon} />
      </IconContainer>
    </CoinLinkContainer>
  );
};
