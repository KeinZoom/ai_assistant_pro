"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import productIndex from "./productIndex";

const tabItems = productIndex;

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div className="flex flex-row items-stretch justify-start min-h-screen">
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
      <div className="w-full flex-grow">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
