import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessages({
          id: makeRandomMessage(5),
          name: generateRandomName(),
          message: makeRandomMessage(30),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="p-2 h-[500px] w-[480px] border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chatMessage) => (
          <ChatMessage
            key={chatMessage.id}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form
        className="w-full p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              id: makeRandomMessage(5),
              name: "Subrata Saha",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="p-2 w-96 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="p-2 mx-2 bg-green-200">Send</button>
      </form>
    </div>
  );
}

export default LiveChat;
