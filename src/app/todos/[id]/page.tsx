import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="pt-28 px-7">
      <div className="w-full">
        <p className="text-2xl font-[700]">
          <input
            type="text"
            placeholder="Title"
            className="bg-transparent w-full outline-none"
          />
        </p>
        <hr />
        <p className="text-base font-[400] mt-4">
          <textarea
            placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis reprehenderit impedit, dolores eligendi obcaecati vel explicabo, amet expedita autem dolorum quaerat aliquid excepturi tempore quo mollitia nihil. Accusamus, ipsa! Sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis reprehenderit impedit, dolores eligendi obcaecati vel explicabo, amet expedita autem dolorum quaerat aliquid excepturi tempore quo mollitia nihil. Accusamus, ipsa! Sit!"
            className="bg-transparent w-full outline-none h-[65vh]"
          />
        </p>
        <hr />
        <div className=" mt-5 w-full text-end space-x-4">
          <button className="bg-red-600 text-white px-5 py-2 rounded-md font-[500] transition-all hover:bg-red-700">
            Delete
          </button>
          <button className="bg-purple-500 text-white px-5 py-2 rounded-md font-[500] transition-all hover:bg-purple-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
