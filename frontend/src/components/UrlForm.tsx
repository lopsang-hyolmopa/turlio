import { useState } from "react";

import { createShortUrl } from "../api/url.api";

const UrlForm = () => {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [customShortCode, setCustomShortCode] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const data = await createShortUrl(originalUrl, customShortCode);
      setShortUrl(data.link);
    } catch (error) {
      console.log("error", error);
      if (error instanceof Error) {
        setError(error.message || "Failed to create short url!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          placeholder="https://example.com"
          required
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* {isAuthenticated && ( */}
      <div className="mt-4">
        <label
          htmlFor="customSlug"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Custom URL (optional)
        </label>
        <input
          type="text"
          id="customSlug"
          value={customShortCode}
          onChange={(event) => setCustomShortCode(event.target.value)}
          placeholder="Enter custom slug"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* )} */}
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {loading ? "Shortening..." : "Shorten URL"}
      </button>
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      {shortUrl && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
          <div className="flex items-center">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                copied
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
