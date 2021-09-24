import React from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="h-full p-3 space-y-2 w-60 fixed">
      <div className="flex items-center p-2 space-x-4">
        <img
          src="https://res.cloudinary.com/dv4i7j6jq/image/upload/v1631034000/kb7d9q7g6qmaq0xks5na.jpg"
          alt=""
          className="w-12 h-12 rounded-full "
        />
        <div>
          <h2 className="text-lg font-semibold">Mehmet Temel</h2>
          <span className="flex items-center space-x-1">
            <a href="#" className="text-xs hover:underline text-coolGray-600">
              View profile
            </a>
          </span>
        </div>
      </div>
      <div className="divide-y divide-coolGray-300 flex flex-col h-full">
        <ul className="pt-2 pb-4 space-y-1 text-sm h-2/4">
          <li className="bg-coolGray-100 text-coolGray-900">
            <Link href="/">
              <a className="flex items-center p-2 space-x-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="bg-coolGray-100 text-coolGray-900">
            <Link href="/categories">
              <a className="flex items-center p-2 space-x-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>Categories</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a className="flex items-center p-2 space-x-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
                <span>Products</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm ">
          <li>
            <Dropdown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
