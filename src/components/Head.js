import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

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
          src="https://banner2.cleanpng.com/20180628/zaz/aayj9bx5v.webp"
        />
        <img
          className="h-10"
          alt="youtube-logo"
          src="https://freepnglogo.com/images/all_img/download-youtube-logo-without-background.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
}

export default Head;
