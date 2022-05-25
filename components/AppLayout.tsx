import React from 'react';
import styles from '../styles/AppLayout.module.css';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className="bg-white sm:bg-blue-50 max-w-md mx-auto min-w-full max-h-screen">
        <div className="flex justify-center relative">
          <div className="hidden sm:block w-60 bg-gray-700">hidden test</div>
          <div className="max-w-md bg-white w-full h-full">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
