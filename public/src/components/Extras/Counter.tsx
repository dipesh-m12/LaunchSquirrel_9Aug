import React, { useEffect, useState } from "react";

function Counter() {
  const [countdown, setCountdown] = useState<{ [key: string]: string }>({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });
  useEffect(() => {
    const countdownDate = new Date("2024-09-01T23:59:59"); // Replace with your launch date

    const interval = setInterval(() => {
      const now = new Date();
      const distance = countdownDate.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: "0", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-center">
      <div className="grid grid-flow-col gap-2 sm:gap-5 text-center auto-cols-max ">
        <div className="flex flex-col p-4 sm:p-8 bg-neutral rounded-none text-neutral-content ">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": countdown.days } as React.CSSProperties}
            ></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-4 sm:p-8 bg-neutral rounded-none text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": countdown.hours } as React.CSSProperties}
            ></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-4 sm:p-8 bg-neutral rounded-none text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": countdown.minutes } as React.CSSProperties}
            ></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-4 sm:p-8 bg-neutral rounded-none text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": countdown.seconds } as React.CSSProperties}
            ></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
}

export default Counter;
