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
    <div className='flex flex-col w-[600px] text-center'>
      <div className='flex justify-around text-3xl mb-6'>
        <span>{timeLeft.days} </span>
        <span>{timeLeft.hours} </span>
        <span>{timeLeft.minutes} </span>
        <span>{timeLeft.seconds} </span>
      </div>
      <div className='flex justify-around text-3xl ml-6'>
      <span> Days</span>
        <span> Hours</span>
        <span> Minutes</span>
        <span> Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
