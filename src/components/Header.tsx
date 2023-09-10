"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [toggler, setToggler] = useState<Boolean>(false);
  return (
    <header className="sticky top-0 left-0 z-50 backdrop-blur-3xl w-full">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"}>
            <button className="font-[700] text-2xl">
              Bun <span className="text-purple-800">Todos</span>
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
            <span className="sr-only">Open main menu</span>
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
          <Link
            href="/todos"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Todos
          </Link>
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div
        className={
          toggler
            ? "fixed top-0 inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden transition-all"
            : "fixed top-0 inset-y-0 right-0 z-50  overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden w-full transition-all translate-x-[100%]"
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
