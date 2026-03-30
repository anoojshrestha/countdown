import React from "react";
import DisplayCountdown from "./Countdown/DisplayCountdown";

const Countdown = () => {
  return (
    <div className="w-full">
      <DisplayCountdown
        name="तता भिनाजु"
        image="https://raw.githubusercontent.com/anoojshrestha/countdown/main/public/tata-vinaju.jpg"
        dateTime="2026-04-06"
        tracking={[
          {
            name: "Kathmandu to Delhi (AI 216)",
            link: "https://www.flightaware.com/live/flight/AIC216",
          },
          {
            name: "Delhi to Frankfurt (AI 2029)",
            link: "https://www.flightaware.com/live/flight/AIC2029",
          },
        ]}
      />
    </div>
  );
};

export default Countdown;
