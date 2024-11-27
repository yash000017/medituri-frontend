import React from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import './button.css'; // Import the CSS file for additional styling

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'dark' | 'light' | 'warning' | 'success';
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
  const theme = useMantineTheme(); // Access the Mantine theme

  // Optional: You can log the theme or specific colors for debugging
  console.log('Theme colors:', theme.colors);

  return (
    <Button
      // Use theme colors if needed, fallback to default colors
      color={color}
      variant={variant}
      onClick={onClick}
      size={size}
      radius={radius}
      disabled={disabled}
      style={{
        // Example of using theme values directly
        padding: `${theme.spacing.sm} ${theme.spacing.md}`, // Custom padding using theme spacing
        backgroundColor:
          variant === 'filled' ? theme.colors[color][6] : undefined, // Example for filled variant
        borderColor: variant === 'outline' ? theme.colors[color][6] : undefined, // Example for outline variant
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
