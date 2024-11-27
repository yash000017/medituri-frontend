import React from 'react';
import { Button } from '@mantine/core';
import './button.css'; // Import the CSS file for styling

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'dark' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'filled' | 'outline' | 'light';
  radius?: number;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  color = 'primary',
  size = 'md',
  variant = 'filled',
  radius = 8,
  disabled = false,
}) => {
  console.log('color', color);
  return (
    <Button
      //   className={`custom-button custom-button--${color} custom-button--${variant}`}
      color={color}
      variant={variant}
      onClick={onClick}
      size={size}
      radius={radius}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
