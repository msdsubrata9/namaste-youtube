import React from "react";
import { USER_ICON_URL } from "../utils/Constants";

function Comment({ comment }) {
  return (
    <div className="flex bg-gray-100 rounded-lg border border-l-black">
      <img className="w-10 h-10 mx-2" alt="user-icon" src={USER_ICON_URL} />
      <div>
        <h3>{comment.user.username}</h3>
        <p>{comment.text}</p>
      </div>
    </div>
  );
}

export default Comment;
