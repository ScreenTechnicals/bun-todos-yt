import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h3 className="text-4xl pb-3 font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome To Bun ToDos
            </h3>
            <p className="text-lg tracking-tighter text-gray-600">
              Our to-do list app is a simple and effective way to stay organized
              and productive. With our app, you can easily create and manage
              tasks, set reminders, and track your progress. Our app is also
              highly customizable, so you can create a to-do list that works for
              you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/todos"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
