import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export const CountdownTimer: React.FC<{ targetHours?: number }> = ({ targetHours = 8 }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: targetHours,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 8, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="inline-flex items-center gap-2 bg-stone-900 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-sm border border-stone-800">
      <Timer className="w-4 h-4 text-amber-400 animate-pulse" />
      <span>ENDS IN:</span>
      <span className="bg-stone-800 text-white px-1.5 py-0.5 rounded text-[11px]">
        {formatDigit(timeLeft.hours)}h
      </span>
      <span>:</span>
      <span className="bg-stone-800 text-white px-1.5 py-0.5 rounded text-[11px]">
        {formatDigit(timeLeft.minutes)}m
      </span>
      <span>:</span>
      <span className="bg-stone-800 text-white px-1.5 py-0.5 rounded text-[11px]">
        {formatDigit(timeLeft.seconds)}s
      </span>
    </div>
  );
};
