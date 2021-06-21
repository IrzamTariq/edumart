import React from "react";
import classNames from "classnames";
import moment from "moment";

import "./Message.scss";

const Message = ({ isMyMessage, message }) => {
  const messageClass = classNames("message-row", {
    "you-message": isMyMessage,
    "other-message": !isMyMessage,
  });

  const imageThumbnail = isMyMessage ? null : (
    <img src={message.imageUrl} alt={message.imageAlt} />
  );

  return (
    <div className={messageClass}>
      <div className="message-content">
        {/* {imageThumbnail} */}
        <div className="message-text">{message.message}</div>
        <div className="message-time">
          {moment(message.createdAt).format("HH:mm")}
        </div>
      </div>
    </div>
  );
};

export default Message;
