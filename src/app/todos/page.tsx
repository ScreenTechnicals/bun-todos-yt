import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen grid place-content-center px-5 pt-14">
      <div className="p-5 mx-auto border rounded-xl backdrop-blur-sm shadow-md">
        <div className="w-full flex items-center justify-between md:flex-row flex-col">
          <div className="md:w-auto w-full">
            <input
              type="search"
              placeholder="Search"
              className="p-2 bg-transparent w-[250px] outline-none"
            />
          </div>
          <div className="md:block hidden">
            <button className="bg-purple-800 w-full px-4 py-2 rounded-lg text-white">
              Create Todo
            </button>
          </div>
        </div>
        <hr className="md:my-5 my-2" />
        <div className="overflow-x-hidden overflow-y-auto w-full h-[65vh]">
          <Link href={"/todos/8yuhkjb"}>
            <Card />
          </Link>
        </div>
        <div className="md:hidden mt-3">
          <button className="bg-purple-800 w-full px-4 py-2 rounded-lg text-white">
            Create Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
