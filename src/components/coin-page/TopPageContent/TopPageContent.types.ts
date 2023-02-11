export interface KeyNumberIsString {
  [key: number]: string;
}
export interface KeyStringIsNumber {
  [key: string]: number;
}
export interface KeyStringIsString {
  [key: string]: string;
}
export interface Props {
  coin: Coin;
  activeCurrency: string;
  currencySymbol: string | undefined;
}
export interface Coin {
  name: string;
  image: {
    large: string;
  };
  symbol: string;
  links: {
    homepage: KeyNumberIsString;
  };
  market_data: MarketData;
}
export interface MarketData {
  price_change_24h_in_currency: KeyStringIsNumber;
  current_price: KeyStringIsNumber;
  ath: KeyStringIsNumber;
  ath_date: KeyStringIsString;
  ath_change_percentage: KeyStringIsNumber;
  atl: KeyStringIsNumber;
  atl_date: KeyStringIsString;
  atl_change_percentage: KeyStringIsNumber;
  market_cap: KeyStringIsNumber;
  fully_diluted_valuation: KeyStringIsString;
  total_volume: KeyStringIsNumber;
  circulating_supply: number;
  max_supply: number;
}
