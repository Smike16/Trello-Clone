import React, { useCallback } from 'react';
import './Input.css';

export type InputOnChange = {
  name: string;
  value: string;
};

type InputProps = {
  name: string;
  placeholder?: string;
  className?: string;
  value: string;
  onChange: ({ name, value }: InputOnChange) => void;
};

export const Input = ({
  name,
  placeholder,
  className,
  value,
  onChange,
}: InputProps) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      name,
      value: event.target.value,
    });
  }, [name, onChange]);

  return (
    <input
      type='text'
      className={`input ${className}`}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange} />
  );
};
