import React from "react";
import DisplayCountdown from "./Countdown/DisplayCountdown";

const Countdown = () => {
  return (
    <div className="w-full">
      <DisplayCountdown
        name="अजा-अजि"
        image="https://raw.githubusercontent.com/anoojshrestha/countdown/main/public/aja-aji.jpg"
        dateTime="2024-08-08"
        tracking={[
          {
            name: "Kathmandu to Istanbul (TK 0727)",
            link: "https://www.turkishairlines.com/en-de/flights/flight-status/?t=1&flight=727&date=080824",
          },
          {
            name: "Istanbul to Nuremberg (TK 1505)",
            link: "https://www.turkishairlines.com/en-de/flights/flight-status/?t=1&flight=1505&date=080824",
          },
        ]}
      />
      <DisplayCountdown
        name="Ashis"
        image="https://raw.githubusercontent.com/anoojshrestha/countdown/main/public/ashis.jpg"
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
