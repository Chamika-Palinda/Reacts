import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

const Chat = () => {
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
            Chatter
        </div>
        <div className="logout-tab">
            Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh -66px)"
        projectId="773b7aa6-25c9-4fe6-89b2-f132555f6357"
      />
    </div>
  );
};

export default Chat;
