"use client";
import React, { act, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const tabItems = [
  {
    key: "Summarize",
    path: "/products/summarize",
  },
  {
    key: "Analyze Sentiment",
    path: "/products/analyze-sentiment",
  },
  {
    key: "Extract Keywords",
    path: "/products/extract-keywords",
  },
];

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div className="flex flex-row items-start justify-start min-h-screen">
      <nav className="flex flex-col mb-4 w-3/12 space-y-2 shadow-lg">
        {tabItems.map((item) => (
          <Link
            href={item.path}
            className={classNames(
              "px-4 py-2 text-white font-semibold rounded-md",
              {
                "bg-slate-700": pathName && pathName === item.path,
              }
            )}
            key={item.key}
          >
            {item.key}
          </Link>
        ))}
      </nav>
      <div className="w-full flex-grow">{children}</div>
    </div>
  );
}
