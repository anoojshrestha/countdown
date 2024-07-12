import React from "react";
import DisplayCountdown from "./Countdown/DisplayCountdown";

const Countdown = () => {
  return (
    <div className="w-full">
      <DisplayCountdown
        name="अजा-अजि"
        image="/aja-aji.jpg"
        dateTime="2024-07-22"
        tracking={[
          {
            name: "Kathmandu to Istanbul (TK 0724)",
            link: "https://www.turkishairlines.com/en-de/flights/flight-status/?t=1&flight=727&date=220724",
          },
          {
            name: "Istanbul to Nuremberg (TK 1505)",
            link: "https://www.turkishairlines.com/en-de/flights/flight-status/?t=1&flight=1505&date=220724",
          },
        ]}
      />
      <DisplayCountdown
        name="Ashis"
        image="/ashis.jpg"
        dateTime="2024-08-22"
        tracking={[
          {
            name: "Kathmandu to Singapore (SQ 441)",
            link: "https://www.flightaware.com/live/flight/SIA441",
          },
          {
            name: "Singapore to San Francisco (SQ 32)",
            link: "https://www.flightaware.com/live/flight/SIA32",
          },
          {
            name: "San Francisco to Austin (AS 534)",
            link: "https://www.flightaware.com/live/flight/ASA534",
          },
        ]}
      />
    </div>
  );
};

export default Countdown;
