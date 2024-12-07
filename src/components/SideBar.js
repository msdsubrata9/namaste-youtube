import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>
      {isMenuOpen && (
        <div className="p-5 shadow-lg w-48">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Shorts</li>
            <li>Video</li>
            <li>Live</li>
          </ul>
          <h1 className="font-bold pt-5">Subscriptions</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBar;
