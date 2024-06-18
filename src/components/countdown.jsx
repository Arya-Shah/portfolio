import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Countdown = () => {
  const [timerdays, setTimerDays] = useState("00");

  let interval = useRef;

  const setTimer = () => {
    const CountdownDate = new Date("Oct 6, 2024 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = CountdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //continue timer
        setTimerDays(days);
      }
    }, 1000);
  };

  useEffect(() => {
    setTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="  border-neutral-900 pb-4 lg:mb-35 timer-container">
      <div className=" flex flex-wrap timer">
        <div className="flex flex-col items center lg:items-start">
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h1 className="pb-16 text-4xl font-thick tracking-tight lg:mt-16">
            Countdown Timer to find a job. My OPT Start date is from 8th July. I
            have 3 months / 90 days to find a job.
            <div className="pb-16 text-sm">
              This timer automatically updates itself.
            </div>
            <div>
              <section className="timer">
                <FaCalendarAlt size={30} color="black" />
                <p>: {timerdays}&nbsp;</p>
                <p>Days</p>
              </section>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
