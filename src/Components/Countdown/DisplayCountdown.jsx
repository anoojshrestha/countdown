import React, { useState, useEffect } from "react";

const DisplayCountdown = ({ name, image, dateTime, tracking }) => {
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    if (dateTime) {
      getDaysDiff(dateTime);
    }
  }, [dateTime]);

  const getDaysDiff = (flightDate) => {
    const currentDateTime = new Date().toLocaleDateString("en-CA");
    const daysDiff = Math.round(
      (parseDate(flightDate) - parseDate(currentDateTime)) /
        (1000 * 60 * 60 * 24)
    );
    setRemainingDays(daysDiff);
  };

  const parseDate = (date) => {
    var mdy = date.split("-");
    return new Date(mdy[0], mdy[1] - 1, mdy[2]);
  };

  const handleDateChange = (value) => {
    getDaysDiff(value);
  };

  return (
    remainingDays >= -2 && (
      <div className="w-full flex justify-center pb-4">
        <div className="w-[360px] md:w-[500px] flex flex-wrap border-b p-4 shadow-md rounded-md">
          <div className="w-full flex justify-between gap-1 sm:gap-4">
            <div className="w-32">
              <img src={image} className="w-full rounded-3xl" />
              <div className="flex justify-center text-md font-bold py-2">
                {name}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-1">
              <div>
                <span
                  className={
                    "text-8xl font-extrabold " +
                    (remainingDays > 30
                      ? "text-gray-900"
                      : remainingDays > 14
                      ? "text-blue-500"
                      : remainingDays > 7
                      ? `text-yellow-500`
                      : "text-red-600")
                  }
                >
                  {remainingDays}
                </span>{" "}
                day
                {remainingDays > 1 ? "s" : null}
              </div>
              <div>
                <input
                  className="w-32 border-b rounded-md px-2"
                  type="date"
                  defaultValue={dateTime}
                  onChange={(e) => handleDateChange(e.target.value)}
                />
              </div>
            </div>
          </div>
          {tracking && (
            <span className="text-sm text-gray-400 pt-4">Live Tracking</span>
          )}
          {tracking &&
            tracking.map((item, idx) => {
              return (
                <div className="w-full text-sm" key={idx}>
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-gray-400 underline p-1"
                  >
                    {item.name}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    )
  );
};

export default DisplayCountdown;
