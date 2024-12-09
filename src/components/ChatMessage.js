import React from "react";
import { USER_ICON_URL } from "../utils/Constants";

function ChatMessage({ name, message }) {
  return (
    <div className="flex items-center shadow-lg p-2">
      <div>
        <img className="h-8 w-8" alt="user-icon" src={USER_ICON_URL} />
      </div>
      <div>
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default ChatMessage;
