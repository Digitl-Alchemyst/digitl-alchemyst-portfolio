/* eslint-disable react/function-component-definition */

import TopLeftImg from './TopLeftImg';

export default function RootLayout({ children, className = '' }) {
  return (
    <>
      {/* <TopLeftImg /> */}

      <div className={`z-0 inline-block h-full w-full pt-32 px-16 pb-52  ${className}`}>
        {children}
      </div>
    </>
  );
}
