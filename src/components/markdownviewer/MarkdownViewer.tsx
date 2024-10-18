import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./styles.css";

const MarkdownViewer = ({ markdownContent }: { markdownContent: string }) => {
  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
