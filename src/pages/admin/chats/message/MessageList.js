import React, { useEffect, useState } from "react";

import Message from "../../../../components/message/Message";
import { getUserMessage } from "../../../../functions/message";
import "./MessageList.scss";
import { useSelector } from "react-redux";

const MessageList = ({ conversationId, messageData }) => {
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    getUserMessage(user.token, conversationId).then((res1) => {
      setMessages(res1.data);
    });
  }, [conversationId]);

  useEffect(() => {
    let arr = [];
    arr.push(messageData);
    for (let i = 0; i < messages.length; i++) {
      const element = messages[i];
      arr.push(element);
    }
    setMessages(arr);
  }, [messageData]);
  const [messages, setMessages] = useState([]);
  let messageItems = null;

  if (messages && messages.length > 0) {
    messageItems = messages.map((message, index) => {
      return (
        <Message
          key={index}
          isMyMessage={message.senderId === user._id ? true : false}
          message={message}
        />
      );
    });
  }

  return <div id="chat-message-list">{messageItems}</div>;
};

export default MessageList;
