const convertDurationToUnix = (duration) => {
  switch (duration) {
    case "1d":
      return 86400;
    case "1w":
      return 604800;
    case "1m":
      return 2592000;
    case "3m":
      return 7776000;
    case "6m":
      return 15552000;
    case "1y":
      return 31536000;
    default:
      return 86400;
  }
};

export default convertDurationToUnix;
