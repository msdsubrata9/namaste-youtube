import React from "react";
import Comment from "./Comment";

function CommentsList({ comments }) {
  return (
    <div className="m-2">
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
          <div>
            <CommentsList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
