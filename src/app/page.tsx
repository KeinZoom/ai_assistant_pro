import Link from "next/link";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">AI Text Summarizer & Analyzer</h1>
      <p className="text-lg mb-12 text-center max-w-2xl">
        Welcome to our AI-powered text analysis tool. You can summarize, analyze
        the sentiment, or extract keywords from any text. Click the buttons
        below to get started!
      </p>

      <div className="flex flex-row space-x-4">
        <Link href="/summarize">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Summarize Text
          </div>
        </Link>
        <Link href="/analyze-sentiment">
          <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Analyze Sentiment
          </div>
        </Link>
        <Link href="/extract-keywords">
          <div className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Extract Keywords
          </div>
        </Link>
      </div>
    </div>
  );
}
