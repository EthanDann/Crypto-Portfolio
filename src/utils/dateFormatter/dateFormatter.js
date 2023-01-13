  const dateFormatter = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString("en-US", {
      timeZone: "CST",
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZoneName: "short",
    });
  };
  
  export default dateFormatter;