/*
*
* This component displays an alert message at the top of the screen.
*
* Structure:
* - Left: InformationCircleIcon
* - Center: Alert text
* - Right: Close button with XMarkIcon
*
* Styles:
* - Position: Fixed at the top of the screen
* - Width: Full-width
* - Padding: Applied to the entire component
* - Background color: Light blue
* - Top border: Dark blue
* - Text color: Dark blue
*/
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface AlertProps {
  message: string;
  onClose: () => void;
}
const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
    return (
        <div className="fixed top-0 w-full bg-blue-100 border-t-4 border-blue-500 text-blue-700 px-4 py-3 flex items-center justify-between" role="alert">
            <div className="flex items-center">
                <InformationCircleIcon className="h-6 w-6 mr-2" />
                <span className="font-medium">{message}</span>
            </div>
            <button onClick={onClose} className="text-blue-700 hover:text-blue-900">
                <XMarkIcon className="h-6 w-6" />
            </button>
        </div>
    );
};
export default Alert;