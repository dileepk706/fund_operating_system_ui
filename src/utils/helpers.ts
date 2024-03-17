import dayjs from "dayjs";

const getColorOfValues = (v: number) => {
  let c = "black";
  if (v < 0) {
    c = "orangered";
  } else if (v > 0) {
    c = "green";
  } else {
    c = "black";
  }
  return c;
};

export const getDate = (date: number | Date) => {
  const customFormat = dayjs(date).format("MMMM D, YYYY"); // Custom format
  return customFormat;
};
export const getTime = (date: Date | number) => {
  const currentTime = dayjs(date).format("h:mm A");
  return currentTime;
};
