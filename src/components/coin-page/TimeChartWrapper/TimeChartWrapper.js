import { useState, useEffect } from "react";
import axios from "axios";
import { TimeChart, DurationSelector } from "components";
import { convertDurationToUnix } from "utils";
import { Wrapper } from "./TimeChartWrapper.styled";

export const TimeChartWrapper = (props) => {
  const [coinPrices, setCoinPrices] = useState([]);
  const [durations, setDurations] = useState([
    {
      duration: "1d",
      active: true,
    },
    {
      duration: "1w",
      active: false,
    },
    {
      duration: "1m",
      active: false,
    },
    {
      duration: "3m",
      active: false,
    },
    {
      duration: "6m",
      active: false,
    },
    {
      duration: "1y",
      active: false,
    },
  ]);

  const getChartData = async (duration) => {
    const todaysDate = new Date() / 1000;
    const startDate = todaysDate - duration;
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${props.coinId}/market_chart/range?vs_currency=${props.activeCurrency}&from=${startDate}&to=${todaysDate}
`
      );
      setCoinPrices(data.prices);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDurationClick = (duration) => {
    const arr = durations.map((time) => {
      return {
        ...time,
        active: time.duration === duration.duration,
      };
    });
    setDurations(arr);
  };
  useEffect(() => {
    durations.map(
      (duration) =>
        duration.active &&
        getChartData(convertDurationToUnix(duration.duration))
    );
    // eslint-disable-next-line
  }, [durations]);
  useEffect(() => {
    getChartData(convertDurationToUnix("1d"));
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      <DurationSelector
        handleDurationClick={handleDurationClick}
        durations={durations}
      />
      <TimeChart coinPrice={coinPrices} />
    </Wrapper>
  );
};
