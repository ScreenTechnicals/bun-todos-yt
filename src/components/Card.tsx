import React from "react";

type TodoType = {
  title: string;
  content: string;
  updatedAt: Date;
};
const Card = ({ todo }: { todo: TodoType }) => {
  const timestamp = new Date(todo.updatedAt)?.toUTCString();

  return (
    <div className="w-full p-4 border-b border-gray-300 cursor-pointer">
      <p className="text-xl md:text-2xl font-[700]">{todo?.title}</p>
      <p className="text-xs md:text-base">{todo?.content}</p>
      <p className="text-xs md:text-sm font-[600] pt-2">
        <span>{timestamp}</span>
      </p>
    </div>
  );
};

export default Card;
