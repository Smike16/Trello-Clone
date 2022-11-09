import React from 'react';
import './Sidebar.css';

type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => (
  <div className='sidebar'>
    {children}
  </div>
);
