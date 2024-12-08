import React from "react";
import CommentsList from "./CommentsList";
import { comments } from "../utils/comments";

function CommentsContainer() {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-3xl">Comments:</h1>
      <CommentsList comments={comments} />
    </div>
  );
}

export default CommentsContainer;
