import React from "react";

import TrashIcon from "../controls/icons/trash-icon/TrashIcon";

import "./ChatTitle.scss";

const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
  let chatTitleContents = null;

  if (selectedConversation) {
    chatTitleContents = (
      <>
        <span>{selectedConversation.title}</span>
      </>
    );
  }

  return <div id="chat-title">{chatTitleContents}</div>;
};

export default ChatTitle;
