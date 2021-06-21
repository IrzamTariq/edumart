import React from "react";
import classNames from "classnames";
import moment from "moment";

import "./ConversationItem.scss";

const ConversationItem = ({
  conversation,
  isActive,
  onConversationItemSelected,
}) => {
  const className = classNames("conversation", {
    active: isActive,
  });

  return (
    <div
      className={className}
      onClick={() => onConversationItemSelected(conversation)}
    >
      {/* <img src={conversation.imageUrl} alt={conversation.imageAlt} /> */}
      {/* <div className="title-text">{conversation.title}</div> */}
      <div className="conversation-message">{conversation.title}</div>
      <div className="created-date" style={{ padding: 5 }}>
        {moment(conversation.createdAt).format("HH:mm")}
      </div>
      <div className="conversation-message">
        {conversation.latestMessageText}
      </div>
    </div>
  );
};

export default ConversationItem;
