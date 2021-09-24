import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-5 p-5 min-h-screen">
        <div className=" col-span-1">
          <Sidebar />
        </div>
        <main className="col-span-4 ">{children}</main>
      </div>
    </>
  );
};

export default Layout;
