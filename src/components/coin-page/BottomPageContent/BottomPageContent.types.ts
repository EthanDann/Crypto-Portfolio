export interface KeyNumberIsString {
  [key: number]: string;
}
export interface KeyStringIsNumber {
  [key: string]: number;
}
export interface Coin {
  market_data: {
    current_price: KeyStringIsNumber;
  };
  links: {
    homepage: KeyNumberIsString;
    blockchain_site: KeyNumberIsString;
  };
  symbol: string;
  description: { en: string };
}
export interface Props {
  coin: Coin;
  activeCurrency: string | any;
  theme: string;
  id: string | undefined;
}
