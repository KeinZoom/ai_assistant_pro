"use client";
import React, { HtmlHTMLAttributes, Suspense, useState } from "react";
import request from "@/utils/http";
import MarkdownViewer from "@/components/markdownviewer/MarkdownViewer";
import classNames from "classnames";
import Answer from "@/components/answer/Answer";
import LoadingPage from "../loading";
import { getAnswer, ResType } from "@/apis/getAnswer";
import productIndex from "../productIndex";
import PageNotFound from "@/app/not-found";

export default function ProductPage({
  params,
}: {
  params: {
    pType: string;
  };
}) {
  const [inputText, setInputText] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const productType = params.pType;

  if (
    productIndex.findIndex((item) => item.pathName.startsWith(productType)) ===
    -1
  ) {
    return <PageNotFound />;
  }

  const handleSummarize = async () => {
    if (!inputText) {
      throw new Error("Input area is empty... Please enter the content.");
    }
    // 调用API逻辑

    try {
      setLoading(true);
      setAnswer("");
      const data: ResType = await getAnswer({
        inputText: inputText,
        path:
          productIndex.find((item) => item.pathName.startsWith(productType))
            ?.remotePath || "",
        pKey:
          productIndex.find((item) => item.pathName.startsWith(productType))
            ?.pKey || "",
      });
      if (data) {
        setLoading(false);
        setAnswer(data.answer);
      }
    } catch (error) {
      setLoading(false);
      throw new Error(`Error in handleSummarize: ${(error as Error).message}`);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(answer);
      alert("copied.");
    } catch (error) {
      console.error("Error occurred", (error as Error).message);
    }
  };

  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSummarize();
    }
  };

  return (
    <div className="flex flex-col px-8 h-full">
      <div className="flex flex-row items-center mb-8 ml-4 space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
        <h2
          className="text-4xl font-bold text-white"
          style={{ textTransform: "capitalize" }}
        >
          {productType.split("-").map((item) => `${item} `)}
        </h2>
      </div>
      <p className="text-lg/10 mb-8">
        <strong>Powered by Dify. !</strong>
        <br></br>
        Offer the best AI generated answer.<br></br>
        Get started by typing in some text below and submit !
      </p>
      <div
        className="container flex flex-col items-end justify-start max-w-2xl h-full"
        style={{ marginBottom: "25px" }}
      >
        <div className="w-full relative">
          <textarea
            className="block w-full border-2 bg-slate-700 text-gray-300 max-w-2xl pl-4 pr-12 py-4 mb-4 rounded-md border-gray-500 shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text here..."
            rows={1}
            style={{
              borderWidth: "1px",
              resize: "none",
              overflow: "hidden",
              marginBottom: "0px",
              height: "60px",
            }}
            onInput={autoResize}
            onKeyDown={handleEnter}
          />
          <div
            className={classNames("size-5", !inputText && "invisible")}
            style={{
              position: "absolute",
              right: "20px",
              top: "calc(50% - 10px)",
              cursor: "pointer",
            }}
            onClick={handleSummarize}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
        {loading ? (
          <LoadingPage />
        ) : (
          answer && (
            <Suspense>
              <Answer
                onHandleCopy={handleCopy}
                onHandleSubmit={handleSummarize}
                answer={answer}
              />
            </Suspense>
          )
        )}
      </div>
    </div>
  );
}
