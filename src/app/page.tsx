import Link from "next/link";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start mt-16 mb-16">
      <h1 className="text-6xl font-bold mb-6 text-center text-white">
        AI Text Summarizer & Analyzer
      </h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        Welcome to our AI-powered text analysis tool. You can summarize, analyze
        the sentiment, or extract keywords from any text. Click the buttons
        below to get started!
      </p>

      <div className="flex flex-row space-x-4">
        <Link href="/products/summarize-text">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded">
            Summarize Text
          </div>
        </Link>
        <Link href="/products/analyze-sentiment">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded">
            Analyze Sentiment
          </div>
        </Link>
        <Link href="/products/extract-keywords">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded">
            Extract Keywords
          </div>
        </Link>
      </div>
    </div>
  );
}
