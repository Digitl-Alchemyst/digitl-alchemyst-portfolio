/* eslint-disable react/function-component-definition */

export default function RootLayout({ children, className = '' }) {
  return (
    <>
      <div
        className={`z-0 inline-block h-full w-full px-16 pb-52 pt-32  ${className}`}
      >
        {children}
      </div>
    </>
  );
}
