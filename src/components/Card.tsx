import React from "react";

const Card = () => {
  return (
    <div className="w-full p-4 border-b border-gray-300 cursor-pointer">
      <p className="text-xl md:text-2xl font-[700]">Title</p>
      <p className="text-xs md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias,
        error voluptates numquam optio, laudantium, pariatur porro impedit animi
        quia eligendi ipsam quas ipsa deserunt tempora ratione. Laboriosam,
        officiis rem!
      </p>
      <p className="text-xs md:text-sm font-[600] pt-2">
        <span>Date: {new Date()?.toLocaleDateString()}</span>
        <span> </span>
        <span>Time: {new Date()?.toLocaleTimeString()}</span>
      </p>
    </div>
  );
};

export default Card;
