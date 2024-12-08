import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  MENU_IMAGE_URL,
  USER_ICON_URL,
  YOUTUBE_LOGO_URL,
} from "../utils/Constants";
import SearchBar from "./SearchBar";

function Head() {
  const dispatch = useDispatch();

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

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
        <SearchBar />
      </div>
      <div className="col-span-1">
        <img className="h-10" alt="user-icon" src={USER_ICON_URL} />
      </div>
    </div>
  );
}

export default Head;
