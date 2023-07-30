/* eslint-disable react/function-component-definition */

import TopLeftImg from "./TopLeftImg";
import Nav from "./Nav";
import Header from "./Header";



export default function RootLayout({ children }) {
  return (
    
        <div>
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
      
  );
}
