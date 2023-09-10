"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

const Header = ({
  isAuthenticated,
  user,
}: {
  isAuthenticated: boolean;
  user: any;
}) => {
  const [toggler, setToggler] = useState<boolean>(false);
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 z-50 backdrop-blur-3xl w-full">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"}>
            <button className="font-[700] text-2xl">
              <span>Bun</span> <span className="text-purple-800">Todos</span>
            </button>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => {
              setToggler(true);
            }}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {isAuthenticated ? (
            <Link
              href="/todos"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Todos
            </Link>
          ) : (
            <button
              onClick={() => {
                toast.error("Please Login!");
              }}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Todos
            </button>
          )}
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact Us
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2">
          {isAuthenticated ? (
            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border px-6 py-1 rounded-full border-[#000] group"
                aria-expanded="false"
              >
                <span>Account</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="absolute cursor-default invisible group-focus-within:visible left-1/2 z-10 mt-5 top-5 flex w-screen max-w-max -translate-x-[90%] px-4">
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <div className="group relative flex gap-x-6 rounded-lg p-4">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <BiSolidUserCircle size={30} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-start text-2xl">
                            {user?.given_name + " " + user?.family_name}
                          </p>
                          <p className="mt-1 text-gray-600">{user?.email}</p>
                        </div>
                      </div>
                      <div className="w-full">
                        <span
                          onClick={() => {
                            router.push("/logout");
                          }}
                          className="flex cursor-pointer items-center justify-center bg-red-500 w-full text-white p-2 space-x-2 rounded-md hover:bg-red-700 transition-all"
                        >
                          <FiLogOut />
                          <span>Logout</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900 border border-[#000] rounded-full px-5 py-1"
            >
              <button>Log In</button>
            </Link>
          )}
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div
        className={
          toggler
            ? "fixed top-0 inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden transition-all h-screen"
            : "fixed top-0 inset-y-0 right-0 z-50 h-screen overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden w-full transition-all translate-x-[100%]"
        }
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <button className="font-[700] text-xl">
              Bun <span className="text-purple-800">Todos</span>
            </button>
          </Link>
          <button
            onClick={() => {
              setToggler(false);
            }}
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link
                href="/todos"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Todos
              </Link>
              <Link
                href="/about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </div>
            <div className="py-6">
              <Link
                href="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
