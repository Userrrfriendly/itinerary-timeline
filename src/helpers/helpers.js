export const getTimeHours = timeStamp => {
  return new Date(timeStamp).toLocaleTimeString("en-US");
};
