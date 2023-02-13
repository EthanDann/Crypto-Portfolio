import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getChartData } from "store/coin/coinSlicer";
import { TimeChart, DurationSelector } from "components";
import { convertDurationToUnix } from "utils";
import { Wrapper } from "./TimeChartWrapper.styled";

interface Props {
  id: string | undefined;
  currency: string;
}
interface Duration {
  duration: string;
  active: boolean;
}

const TimeChartWrapper: React.FC<Props> = ({ id, currency }) => {
  const dispatch = useAppDispatch();
  const chart_data = useAppSelector((state) => state.coin.chart_data);
  const [durations, setDurations] = useState<Duration[]>([
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
  const handleDurationClick = (duration: Duration) => {
    const arr = durations.map((time) => {
      return {
        ...time,
        active: time.duration === duration.duration,
      };
    });
    setDurations(arr);
  };
  useEffect(() => {
    durations.map((duration) => {
      const length: any = convertDurationToUnix(duration.duration);
      return (
        duration.active && dispatch(getChartData({ length, id, currency }))
      );
    });
  }, [durations]);
  useEffect(() => {
    const length: any = convertDurationToUnix("1d");
    dispatch(getChartData({ length, id, currency }));
  }, [durations]);
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

export default TimeChartWrapper;
