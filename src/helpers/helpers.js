import { airportNameMap } from "../data/mockAirportNameMap";

export const timeStampToLocalTime = timeStamp => {
  return new Date(timeStamp).toLocaleTimeString("en-US");
};

export const airportCodeToLocalName = code => {
  return airportNameMap[code] ? airportNameMap[code] : code;
};

export const terminalBusinessLevel = num => {
  if (num >= 7) {
    return "busy";
  } else if (num > 5) {
    return "slightly busy";
  } else {
    return "quiet";
  }
};
