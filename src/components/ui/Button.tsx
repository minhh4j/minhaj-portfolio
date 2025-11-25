import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  download,
  target,
  rel,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-primary text-secondary hover:bg-accent focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-gray-800 focus:ring-secondary',
    outline: 'bg-transparent border-2 border-primary text-primary dark:text-primary hover:bg-primary/10 focus:ring-primary'
  };
  const sizeStyles = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;
  const buttonVariants = {
    hover: {
      scale: 1.05
    },
    tap: {
      scale: 0.95
    }
  };
  if (href) {
    return <motion.a href={href} className={buttonStyles} download={download} target={target} rel={rel} whileHover={!disabled ? 'hover' : undefined} whileTap={!disabled ? 'tap' : undefined} variants={buttonVariants} onClick={onClick}>
        {children}
      </motion.a>;
  }
  return <motion.button type={type} className={buttonStyles} onClick={onClick} disabled={disabled} whileHover={!disabled ? 'hover' : undefined} whileTap={!disabled ? 'tap' : undefined} variants={buttonVariants}>
      {children}
    </motion.button>;
};