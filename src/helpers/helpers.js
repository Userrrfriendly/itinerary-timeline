export const timeStampToLocalTime = timeStamp => {
  return new Date(timeStamp).toLocaleTimeString("en-US");
};
