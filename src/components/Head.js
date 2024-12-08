import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {
  MENU_IMAGE_URL,
  USER_ICON_URL,
  YOUTUBE_LOGO_URL,
  YOUTUBE_SEARCH_API,
} from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggessions, setSuggessions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchResults = useSelector((store) => store.search);

  const dispatch = useDispatch();

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  async function getSearchQueryResults() {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggessions(json[1]);
    // update the cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // if searchQuery present in cache
      // then we will not do API call
      if (searchResults[searchQuery]) {
        setSuggessions(searchResults[searchQuery]);
      } else {
        getSearchQueryResults();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 gap-2">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-10 cursor-pointer"
          alt="menu"
          src={MENU_IMAGE_URL}
        />
        <img className="h-10" alt="youtube-logo" src={YOUTUBE_LOGO_URL} />
      </div>
      <div className="col-span-10 px-10">
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
        </div>
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
      <div className="col-span-1">
        <img className="h-10" alt="user-icon" src={USER_ICON_URL} />
      </div>
    </div>
  );
}

export default Head;
