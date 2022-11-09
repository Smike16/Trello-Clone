import React, { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  type: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const Button = ({
  type = 'button',
  className,
  disabled,
  children,
  onClick,
}: ButtonProps) => (
  <button
    className={`button ${className}`}
    type={type}
    disabled={disabled}
    onClick={onClick}>
    {children}
  </button>
);
