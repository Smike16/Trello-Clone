import React from 'react';
import './Content.css';

type ContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: ContentProps) => (
  <div className='content'>
    {children}
  </div>
);
