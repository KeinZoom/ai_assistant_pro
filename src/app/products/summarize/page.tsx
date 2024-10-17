"use client";
import { HtmlHTMLAttributes, Suspense, useState } from "react";
import request from "@/utils/http";
import MarkdownViewer from "@/components/markdownviewer/MarkdownViewer";
import classNames from "classnames";
import Answer from "@/components/answer/Answer";
import LoadingPage from "./loading";

export default function SummarizePage() {
  const [inputText, setInputText] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);

  const handleSummarize = async () => {
    if (!inputText) {
      throw new Error("Input area is empty... Please enter the content.");
    }
    // 调用API逻辑
    const body = {
      inputs: {
        input_text: inputText,
      },
      user: "keinn",
    };

    try {
      setLoading(true);
      const res = await request.post(
        "/completion-messages",
        JSON.stringify(body),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res && res.data) {
        setLoading(false);
        setSummary(res.data.answer);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      alert("copied.");
    } catch (error) {
      console.error("Error occurred", (error as Error).message);
    }
  };

  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
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
        <h2 className="text-4xl font-bold text-white ">Summarize Text</h2>
      </div>
      <p className="text-lg/10 mb-8">
        <strong>Powered by Dify. !</strong>
        <br></br>
        Offer the best AI generated summary.<br></br>
        Get started by typing in some text below and submit!
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
          summary && (
            <Suspense>
              <Answer
                onHandleCopy={handleCopy}
                onHandleSubmit={handleSummarize}
                answer={summary}
              />
            </Suspense>

            // <div className="mt-6 max-w-2xl p-8 rounded-lg shadow bg-slate-700 relative">
            //   <h2 className="text-2xl font-bold mb-4">Summary:</h2>
            //   <div className="flex flex-row space-x-4 absolute top-8 right-8">
            //     <svg
            //       xmlns="http://www.w3.org/2000/svg"
            //       fill="none"
            //       viewBox="0 0 24 24"
            //       strokeWidth={1.5}
            //       stroke="currentColor"
            //       className="size-8"
            //       onClick={handleCopy}
            //       cursor="pointer"
            //     >
            //       <path
            //         strokeLinecap="round"
            //         strokeLinejoin="round"
            //         d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            //       />
            //     </svg>
            //     <svg
            //       xmlns="http://www.w3.org/2000/svg"
            //       fill="none"
            //       viewBox="0 0 24 24"
            //       strokeWidth={1.5}
            //       stroke="currentColor"
            //       className="size-8"
            //       onClick={handleSummarize}
            //       cursor="pointer"
            //     >
            //       <path
            //         strokeLinecap="round"
            //         strokeLinejoin="round"
            //         d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            //       />
            //     </svg>
            //   </div>

            //   <MarkdownViewer markdownContent={summary} />
            //   {/* <p>{summary}</p> */}
            // </div>
          )
        )}
      </div>
    </div>
  );
}
