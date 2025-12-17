// two button for adding and subtracting the timer mode

import React from 'react';
import Button from './Button';

interface LengthSettingProps {
  title: string;
  length: number;
  onIncrease: () => void;
  onDecrease: () => void;
  isDisabled: boolean;
};

const LengthSetting: React.FC<LengthSettingProps> = ({ title, length, onIncrease, onDecrease, isDisabled }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex justify-center items-center space-x-2">
        <Button variant='default' onClick={onDecrease} disabled={isDisabled}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
        </Button>
        <span className="text-2xl font-mono w-12 text-center">{length}</span>
        <Button variant='default' onClick={onIncrease} disabled={isDisabled}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </Button>
        </div>
    </div>
  );
};

export default LengthSetting;