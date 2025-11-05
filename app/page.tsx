import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-lime-50">
  <h3 className="font-semibold text-4xl text-lime-700 mb-6">
    3D World
  </h3>
  <div className="flex gap-4 flex-wrap">
    <Link
      href="/cube"
      className="px-6 py-2 bg-lime-300 text-lime-900 font-medium rounded-lg hover:bg-lime-500 transition-colors duration-200"
    >
      Cube
    </Link>

    <Link
      href="/shadow"
      className="px-6 py-2 bg-lime-300 text-lime-900 font-medium rounded-lg hover:bg-lime-400 transition-colors duration-200"
    >
      Shadow
    </Link>

    <Link
      href="/planat"
      className="px-6 py-2 bg-lime-300 text-lime-900 font-medium rounded-lg hover:bg-lime-400 transition-colors duration-200"
    >
      Planat
    </Link>
    <Link
      href="/sky"
      className="px-6 py-2 bg-lime-300 text-lime-900 font-medium rounded-lg hover:bg-lime-400 transition-colors duration-200"
    >
      Sky
    </Link>
    
  </div>
</div>

  );
}
