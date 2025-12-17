import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant: 'primary' | 'danger' | 'default';
  disabled?: boolean;
}

const STYLES_MAP = {
  base: 'px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200',
  variant: {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    default: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
  },
  disabled: 'opacity-50 cursor-not-allowed',
};

const Button: React.FC<ButtonProps> = ({ onClick, children, variant, disabled = false }) => {
  const { base, variant: variantMap, disabled: disabledClass } = STYLES_MAP;
  const disabledStyles = disabled ? disabledClass : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variantMap[variant]} ${disabledStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;