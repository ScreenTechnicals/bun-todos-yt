"use client";

import Card from "@/components/Card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";

const Page = () => {
  const [todos, setTodos] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getTodos = async () => {
    try {
      await fetch("/api/get-todos", {
        headers: {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.success) {
            setTodos(data.todos);
          }
        });
    } catch (error: any) {
      console.log("Get Todos err:", error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="w-full h-screen grid place-items-center px-5 pt-14">
      <div className="w-full p-5 mx-auto border rounded-xl backdrop-blur-sm shadow-md">
        <div className="w-full flex items-center justify-between md:flex-row flex-col">
          <div className="md:w-auto w-full">
            <input
              type="search"
              placeholder="Search"
              className="p-2 bg-transparent w-[250px] outline-none"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              value={searchTerm}
            />
          </div>
          <div className="md:block hidden">
            <Link href={"/todos/create"}>
              <button className="bg-purple-800 w-full px-4 py-2 rounded-lg text-white">
                Create Todo
              </button>
            </Link>
          </div>
        </div>
        <hr className="md:my-5 my-2" />
        <div className="overflow-x-hidden overflow-y-auto w-full h-[65vh]">
          {loading ? (
            <div className="w-full grid place-items-center py-10">
              <PiSpinnerBold
                size={50}
                color={"purple"}
                className="animate-spin"
              />
            </div>
          ) : todos?.length > 0 ? (
            todos?.reverse()?.map((todo: any, index: number) => {
              if (
                todo?.title
                  ?.toLowerCase()
                  ?.includes(searchTerm.toLowerCase()) ||
                todo?.content?.toLowerCase()?.includes(searchTerm.toLowerCase())
              ) {
                return (
                  <Link key={index} href={`/todos/${todo._id}`}>
                    <Card todo={todo} />
                  </Link>
                );
              }
            })
          ) : (
            <div className="text-center text-lg py-5 w-full">
              No Todo Creted Yet
            </div>
          )}
        </div>
        <div className="md:hidden mt-3">
          <Link href={"/todos/create"}>
            <button className="bg-purple-800 w-full px-4 py-2 rounded-lg text-white">
              Create Todo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
