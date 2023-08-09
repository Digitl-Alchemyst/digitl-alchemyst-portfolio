/* eslint-disable react/function-component-definition */

import TopLeftImg from './TopLeftImg';

export default function RootLayout({ children, className='' }) {
  return (



    <>
      {/* <TopLeftImg /> */}

      <div className={`z-0 inline-block h-full w-full p-32  ${className}`}>{children}</div>
    </>
  );
}
