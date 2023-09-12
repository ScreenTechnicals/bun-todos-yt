"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FcSettings } from "react-icons/fc";

const Page = () => {
  const router = useRouter();
  const createUser = async () => {
    await fetch("/api/adduser", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          router.push("/todos");
          toast.success("Verified");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    createUser();
  }, []);
  return (
    <div className="w-full h-screen grid place-items-center">
      <FcSettings size={100} className="animate-spin" />
    </div>
  );
};

export default Page;
