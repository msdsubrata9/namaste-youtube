import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";
import { YOUTUBE_SEARCH_RESULTS_BASE_API } from "../utils/Constants";

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const [nextPageToken, setNextPageToken] = useState(null);

  async function getSearchQueryResults() {
    const query = encodeURIComponent(searchParams.get("query"));
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const url = nextPageToken
      ? `${YOUTUBE_SEARCH_RESULTS_BASE_API}?part=snippet&maxResults=8&q=${query}&pageToken=${nextPageToken}&key=${apiKey}`
      : `${YOUTUBE_SEARCH_RESULTS_BASE_API}?part=snippet&maxResults=8&q=${query}&key=${apiKey}`;

    const data = await fetch(url);
    const json = await data.json();

    if (json.items) {
      setSearchResults((prev) => {
        const existingIds = new Set(prev.map((video) => video.id.videoId));
        return [
          ...prev,
          ...json.items.filter((video) => !existingIds.has(video.id.videoId)),
        ];
      });
    }
    setNextPageToken(json.nextPageToken || null);
  }
  useEffect(() => {
    getSearchQueryResults();
  }, []);

  async function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (nextPageToken) {
        getSearchQueryResults();
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken]);
  return (
    <div className="flex flex-wrap">
      {searchResults.map((searchResult) => (
        <Link
          key={searchResult.id.videoId || searchResult.id.channelId}
          to={
            "/watch?v=" + searchResult.id.videoId || searchResult.id.channelId
          }
        >
          <SearchResultCard info={searchResult} />
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
