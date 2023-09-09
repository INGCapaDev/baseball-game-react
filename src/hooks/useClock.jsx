import { useEffect, useState } from "react";
import dayjs from "dayjs";

export const useClock = () => {
  const [time, setTime] = useState(dayjs(Date.now()).format("HH:mm:ss"));
  const [date, setDate] = useState(dayjs(Date.now()).format("DD/MM/YY"));

  useEffect(() => {
    const seconds = setInterval(() => {
      setTime(dayjs(Date.now()).format("HH:mm:ss"));
      setDate(dayjs(Date.now()).format("DD/MM/YY"));
    }, 1000);
    return () => clearInterval(seconds);
  }, []);

  return { time, date };
};
