import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";
import { useEffect, useState } from "react";

function useSearchQuery(searchQuery) {
  const dispatch = useDispatch();
  const [suggessions, setSuggessions] = useState([]);
  const searchResults = useSelector((store) => store.search);

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
  return suggessions;
}

export default useSearchQuery;
