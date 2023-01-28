import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getChartData } from "store/coin/action";
import { TimeChart, DurationSelector } from "components";
import { convertDurationToUnix } from "utils";
import { Wrapper } from "./TimeChartWrapper.styled";

const TimeChartWrapper = (props) => {
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
  const { chart_data } = props;

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
        props.getChartData(
          convertDurationToUnix(duration.duration),
          props.coinId
        )
    );
    // eslint-disable-next-line
  }, [durations]);
  useEffect(() => {
    props.getChartData(convertDurationToUnix("1d"), props.coinId);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {chart_data && (
        <Wrapper>
          <DurationSelector
            handleDurationClick={handleDurationClick}
            durations={durations}
          />
          <TimeChart chart={chart_data} />
        </Wrapper>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  chart_data: state.coin.chart_data,
  isLoading: state.coin.isLoading,
  error: state.coin.error,
});
const mapDispatchToProps = {
  getChartData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeChartWrapper);
