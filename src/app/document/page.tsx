import React from "react";

const DocumentsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 w-8/12">
      <h1 className="text-3xl font-bold mb-8">
        API Documentation - AI Text Processing Application
      </h1>
      <p className="text-lg mb-8">
        This API provides three text processing features: text summarization,
        sentiment analysis, and keyword extraction.
      </p>

      <h2 className="text-2xl font-semibold mb-6">API Endpoints</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">1. Text Summarization</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>URL:</strong>{" "}
            <code className="bg-[rgb(40,40,60)] px-1">
              /products/summarize/apis
            </code>
          </li>
          <li>
            <strong>Method:</strong> POST
          </li>
          <li>
            <strong>Request:</strong>
          </li>
          <pre className="bg-[rgb(40,40,60)] text-white p-4 rounded">
            <code>
              {`{
  "input_text": "Text content to be summarized"
}`}
            </code>
          </pre>
          <li>
            <strong>Response:</strong>
          </li>
          <pre className="bg-[rgb(40,40,60)] text-white p-4 rounded">
            <code>
              {`{
  "data": {
    "answer": "This is the summarized text."
  }
}`}
            </code>
          </pre>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">2. Sentiment Analysis</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>URL:</strong>{" "}
            <code className="bg-[rgb(40,40,60)] px-1">
              /products/analyze-sentiment/apis
            </code>
          </li>
          <li>
            <strong>Method:</strong> POST
          </li>
          <li>
            <strong>Request:</strong>
          </li>
          <pre className="bg-[rgb(40,40,60)] text-white p-4 rounded">
            <code>
              {`{
  "input_text": "Text content for sentiment analysis"
}`}
            </code>
          </pre>
          <li>
            <strong>Response:</strong>
          </li>
          <pre className="bg-[rgb(40,40,60)] text-white p-4 rounded">
            <code>
              {`{
  "data": {
    "answer": "The sentiment of the text is positive."
  }
}`}
            </code>
          </pre>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">3. Keyword Extraction</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>URL:</strong>{" "}
            <code className="bg-[rgb(40,40,60)] px-1">
              /products/extract-keywords/apis
            </code>
          </li>
          <li>
            <strong>Method:</strong> POST
          </li>
          <li>
            <strong>Request:</strong>
          </li>
          <pre className="bg-[rgb(40,40,60)] text-white p-4 rounded">
            <code>
              {`{
  "input_text": "Text content for keyword extraction"
}`}
            </code>
          </pre>
          <li>
            <strong>Response:</strong>
          </li>
          <pre className="bg-[rgb(40,40,60)] text-white p-4 rounded">
            <code>
              {`{
  "data": {
    "answer": ["Keyword1", "Keyword2", "Keyword3"]
  }
}`}
            </code>
          </pre>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Request Parameters</h2>
      <table className="min-w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-[rgb(40,40,60)]">
            <th className="border border-gray-300 p-2">Parameter</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Required</th>
            <th className="border border-gray-300 p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">
              <code>input_text</code>
            </td>
            <td className="border border-gray-300 p-2">String</td>
            <td className="border border-gray-300 p-2">Yes</td>
            <td className="border border-gray-300 p-2">
              The text content to be processed
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-6">Response Parameters</h2>
      <table className="min-w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-[rgb(40,40,60)]">
            <th className="border border-gray-300 p-2">Field</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">
              <code>data</code>
            </td>
            <td className="border border-gray-300 p-2">Object</td>
            <td className="border border-gray-300 p-2">
              Contains the returned result
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              <code>answer</code>
            </td>
            <td className="border border-gray-300 p-2">String or Array</td>
            <td className="border border-gray-300 p-2">
              The summarized text, sentiment, or extracted keywords
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsPage;
