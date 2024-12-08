import React, { useState } from "react";
import useSearchQuery from "../hooks/useSearchQuery";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const suggessions = useSearchQuery(searchQuery);
  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        onFocus={() => setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)}
        className="w-1/2 border border-gray-400 px-4 p-2 rounded-l-full"
        type="text"
      />
      <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
        Search
      </button>
      {showSuggestion && (
        <div className="absolute bg-white w-1/3 border border-gray-100 shadow-lg rounded-lg">
          <ul>
            {suggessions.map((suggestion) => (
              <li
                key={suggestion}
                className="px-4 my-2 hover:bg-gray-100 cursor-pointer"
              >
                🔍 {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
