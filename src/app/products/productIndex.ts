type ProductConfig = {
  key: string;
  path: string;
  pathName: string;
  remotePath: string;
  pKey: string;
};

const productIndex: ProductConfig[] = [
  {
    key: "Summarize Text",
    path: "/products/summarize-text",
    pathName: "summarize-text",
    remotePath: "/completion-messages",
    pKey: "Bearer app-QE81m9bsAZmPomWk7ZDmUw4V",
  },
  {
    key: "Analyze Sentiment",
    path: "/products/analyze-sentiment",
    pathName: "analyze-sentiment",
    remotePath: "/completion-messages",
    pKey: "Bearer app-LWtdGAfofV14UQ1i16JexIqq",
  },
  {
    key: "Extract Keywords",
    path: "/products/extract-keywords",
    pathName: "extract-keywords",
    remotePath: "/completion-messages",
    pKey: "Bearer app-g02qTwJZF03xYZqVg1CefStQ",
  },
];

export default productIndex;
