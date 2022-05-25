import React from 'react';
import styles from '../styles/AppLayout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-white sm:bg-blue-50 max-w-md mx-auto min-w-full max-h-screen">
        <div className="flex justify-center relative">
          <div className="hidden sm:block w-60 bg-gray-200">hidden test</div>
          <div className="max-w-md bg-white w-full h-full px-5">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
