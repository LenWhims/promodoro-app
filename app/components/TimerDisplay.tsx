import React from 'react';

interface TimerDisplayProps {
  time: number;
  mode: 'session' | 'break';
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time, mode }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">{mode.charAt(0).toUpperCase() + mode.slice(1)}</h2>
        <span className="text-6xl font-mono">{formattedTime}</span>
    </div>
  );
};

export default TimerDisplay;