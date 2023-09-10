import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="md:w-[400px] bg-white p-10 shadow-[#e4e4e4] shadow-md rounded-xl">
        <h1 className="text-3xl font-[500]">
          Are you sure you want to logout?
        </h1>
        <div className="w-full flex items-center justify-between">
          <Link href={"/todos"}>
            <button className="px-3 py-2 bg-purple-800 text-white rounded-md md:text-xl">
              Cancel
            </button>
          </Link>

          <button className="px-3 py-2 bg-red-600 text-white rounded-md md:text-xl">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
