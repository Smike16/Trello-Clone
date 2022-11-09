import React, { useState, useCallback } from 'react';
import { Input, InputOnChange } from '../Input';
import { Button } from '../Button';
import './AddForm.css';

type AddFormProps = {
  placeholder?: string;
  onSubmit: (value: string) => void;
};

export const AddForm = ({
  placeholder,
  onSubmit,
}: AddFormProps) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(({ value }: InputOnChange) => {
    setValue(value);
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();

    onSubmit(value);
    setValue('');
  }, [value, onSubmit]);

  return (
    <form
      className='add-form'
      autoComplete='off'
      onSubmit={handleSubmit}>
      <Input
        className='add-form-input'
        name='value'
        placeholder={placeholder}
        value={value}
        onChange={handleChange} />
      <Button
        type='submit'
        className='add-form-button'
        disabled={!value.length}>
        Add
      </Button>
    </form>
  );
};
