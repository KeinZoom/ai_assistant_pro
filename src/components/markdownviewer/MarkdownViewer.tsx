import React from "react";
import ReactMarkdown from "react-markdown";
import "./styles.css";

const MarkdownViewer = ({ markdownContent }: { markdownContent: string }) => {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
