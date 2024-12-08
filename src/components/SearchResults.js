import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();

  async function getSearchQueryResults() {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
        encodeURIComponent(searchParams.get("query")) +
        "&key=" +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    setSearchResults(json.items);
  }
  useEffect(() => {
    getSearchQueryResults();
  }, []);
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
