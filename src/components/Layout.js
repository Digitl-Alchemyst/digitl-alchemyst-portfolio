/* eslint-disable react/function-component-definition */

export default function RootLayout({ children, className = '' }) {
  return (
    <>
      <div
        className={`z-0 inline-block xl:flex items-center justify-center h-full w-full pl-6 pr-6 xl:pl-10 xl:pr-15 xl:pt-0 md:pt-30 lg:pt-20 pt-40 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
