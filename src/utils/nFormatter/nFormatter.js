import numeral from "numeral";

const nFormatter = (num, format) => {
  return numeral(num).format(format).toUpperCase();
};

export default nFormatter;
