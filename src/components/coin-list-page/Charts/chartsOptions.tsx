export const options = {
  layout: {
    padding: {
      top: 100,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      display: false,
    },
    x: {
      grid: {
        color: "transparent",
      },
      ticks: {
        font: {
          size: 12,
        },
        maxRotation: 0,
        minRotation: 0,
      },
    },
  },
};
