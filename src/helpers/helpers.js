import { airportNameMap } from "../data/mockAirportNameMap";

export const timeStampToLocalTime = timeStamp => {
  return new Date(timeStamp).toLocaleTimeString("en-US");
};

export const airportCodeToName = code => {
  return airportNameMap[code] ? airportNameMap[code] : code;
};
