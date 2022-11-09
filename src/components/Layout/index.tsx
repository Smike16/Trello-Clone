import React from 'react';
import './layout.css';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const Layout = ({
  title,
  children,
}: LayoutProps) => (
  <div className='layout'>
    <h1 className='layout-title'>
      {title}
    </h1>
    <div className='layout-content'>
      {children}
    </div>
  </div>
);
