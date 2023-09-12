"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type TodoType = {
  id: string;
  title: string;
  content: string;
};

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [todoData, setTodoData] = useState<TodoType>({
    id: id,
    title: "",
    content: "",
  });

  const createTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      if (id === "create") {
        if (todoData.title === "") {
          toast.error("Title is required");
          return;
        }
        await fetch("/api/create-todo", {
          method: "POST",
          headers: {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todoData),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success) {
              toast.success(res.message);
              router.push("/todos");
            }
          });
      }
    } catch (error: any) {
      console.log("Todo Error:", error.message);
    }
  };

  const updateTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      if (id !== "create") {
        if (todoData.title === "") {
          toast.error("Title is required");
          return;
        }
        await fetch("/api/update-todo", {
          method: "POST",
          headers: {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todoData),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success) {
              toast.success(res.message);
              router.push("/todos");
            }
          });
      }
    } catch (error: any) {
      console.log("Todo Error:", error.message);
    }
  };
  const deleteTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      if (id !== "create") {
        if (todoData.title === "") {
          toast.error("Title is required");
          return;
        }
        await fetch("/api/delete-todo", {
          method: "POST",
          headers: {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todoData),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success) {
              toast.success(res.message);
              router.push("/todos");
            }
          });
      }
    } catch (error: any) {
      console.log("Todo Error:", error.message);
    }
  };

  const [loading, setLoading] = useState<boolean>(true);

  const getTodo = async () => {
    try {
      await fetch(`/api/get-todo/${id}`, {
        headers: {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setTodoData({
              ...todoData,
              title: data.todo.title,
              content: data.todo.content,
            });
          }
        });
    } catch (error: any) {
      console.log("Get Todos err:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="pt-28 px-7">
      <div className="w-full">
        <p className="text-2xl font-[700]">
          <input
            type="text"
            placeholder={id === "create" ? "Title" : ""}
            className="bg-transparent w-full outline-none"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTodoData({ ...todoData, title: e.target.value });
            }}
            value={todoData.title}
          />
        </p>
        <hr />
        <p className="text-base font-[400] mt-4">
          <textarea
            placeholder={
              id === "create"
                ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis reprehenderit impedit, dolores eligendi obcaecati vel explicabo, amet expedita autem dolorum quaerat aliquid excepturi tempore quo mollitia nihil. Accusamus, ipsa! Sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis reprehenderit impedit, dolores eligendi obcaecati vel explicabo, amet expedita autem dolorum quaerat aliquid excepturi tempore quo mollitia nihil. Accusamus, ipsa! Sit!"
                : ""
            }
            className="bg-transparent w-full outline-none h-[65vh]"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setTodoData({ ...todoData, content: e.target.value });
            }}
            value={todoData.content}
          />
        </p>
        <hr />
        <div className=" mt-5 w-full text-end space-x-4">
          {id !== "create" && (
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                deleteTodo(e);
              }}
              className="bg-red-600 text-white px-5 py-2 rounded-md font-[500] transition-all hover:bg-red-700"
            >
              Delete
            </button>
          )}
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (id === "create") {
                createTodo(e);
              } else {
                updateTodo(e);
              }
            }}
            className="bg-purple-500 text-white px-5 py-2 rounded-md font-[500] transition-all hover:bg-purple-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
