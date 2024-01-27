// components/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CountdownTimer: React.FC = () => {
  const weddingDate = moment('2024-11-11T19:00:00');

  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const calculateTimeLeft = (): TimeLeft => {
    const now = moment();
    const difference = weddingDate.diff(now, 'seconds');
    const duration = moment.duration(difference, 'seconds');

    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const calculatedTimeLeft = calculateTimeLeft();
      setTimeLeft(calculatedTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Countdown to Wedding:</p>
      <div>
        <span>{timeLeft.days} days</span>
        <span>{timeLeft.hours} hours</span>
        <span>{timeLeft.minutes} minutes</span>
        <span>{timeLeft.seconds} seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
