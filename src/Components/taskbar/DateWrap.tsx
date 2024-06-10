import React, { useState, useEffect } from "react";
import "../../style/main.scss";
import dayjs from "dayjs";

const DateWrap = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const date = dayjs().format("YYYY-MM-DD");
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="DateWrap">
      <div>{time.substring(0, time.length - 3)}</div>
      <div>{date}</div>
    </div>
  );
};

export default DateWrap;
