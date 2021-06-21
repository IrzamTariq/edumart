import React, { useEffect, useState } from "react";

import ConversationSearch from "../../../../components/conversation/conversation-search/ConversationSearch";
import NoConversations from "../../../../components/conversation/no-conversations/NoConversations";
import ConversationList from "../../../../components/conversation/conversation-list/ConversationList";
import NewConversation from "../../../../components/conversation/new-conversation/NewConversation";
import ChatTitle from "../../../../components/chat-title/ChatTitle";
import MessageList from "../message/MessageList";
import ChatForm from "../../../../components/chat-form/ChatForm";
import { getAllChats, postMessage } from "../../../../functions/message";
import { useSelector } from "react-redux";

import "./ChatShell.scss";

// const conversations = [
//   {
//     id: "2",
//     imageUrl: null,
//     imageAlt: "Kim O'Neil",
//     title: "Kim O'Neil",
//     createdAt: "Oct 20",
//     latestMessageText: "Ok fair enough. Well good talking to you.",
//     messages: [],
//   },
//   {
//     id: "3",
//     imageUrl: null,
//     imageAlt: "John Anderson",
//     title: "John Anderson",
//     createdAt: "1 week ago",
//     latestMessageText: "Yes I love how Python does that",
//     messages: [],
//   },
//   {
//     id: "4",
//     imageUrl: null,
//     imageAlt: "Ben Smith",
//     title: "Ben Smith",
//     createdAt: "2:49 PM",
//     latestMessageText: "Yeah Miami Heat are done",
//     messages: [],
//   },
//   {
//     id: "5",
//     imageUrl: null,
//     imageAlt: "Douglas Johannasen",
//     title: "Douglas Johannasen",
//     createdAt: "6:14 PM",
//     latestMessageText: "No it does not",
//     messages: [],
//   },
//   {
//     id: "6",
//     imageUrl: null,
//     imageAlt: "Jacob Manly",
//     title: "Jacob Manly",
//     createdAt: "3 secs ago",
//     latestMessageText: "Just be very careful doing that",
//     messages: [],
//   },
//   {
//     id: "7",
//     imageUrl: null,
//     imageAlt: "Stacey Wilson",
//     title: "Stacey Wilson",
//     createdAt: "30 mins ago",
//     latestMessageText: "Awesome!!! Congratulations!!!!",
//     messages: [],
//   },
//   {
//     id: "8",
//     imageUrl: null,
//     imageAlt: "Stan George",
//     title: "Stan George",
//     createdAt: "1 week ago",
//     latestMessageText: "Good job",
//     messages: [],
//   },
//   {
//     id: "9",
//     imageUrl: null,
//     imageAlt: "Sarah Momes",
//     title: "Sarah Momes",
//     createdAt: "1 year ago",
//     latestMessageText: "Thank you. I appreciate that.",
//     messages: [],
//   },
// ];
const ChatShell = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [conversations, setConservation] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState({});
  const [messages, setMessages] = useState({});
  useEffect(() => {
    getAllChats(user.token).then((res) => {
      let arr = [];
      for (let i = 0; i < res.data.length; i++) {
        const element = res.data[i];
        arr.push({
          id: element._id,
          imageUrl: null,
          imageAlt: element.user.name,
          title: element.user.name,
          createdAt: element.createdAt,
          latestMessageText: element.lastMsg,
          messages: [],
        });
      }
      setConservation(arr);
    });
  }, []);

  let conversationContent = (
    <>
      <NoConversations></NoConversations>
    </>
  );

  if (conversations.length > 0) {
    conversationContent = (
      <>
        <MessageList
          conversationId={selectedConversation.id}
          messageData={messages}
        />
      </>
    );
  }

  return (
    <div id="chat-container">
      <ConversationSearch conversations={conversations} />
      <ConversationList
        onConversationItemSelected={(item) => {
          setSelectedConversation(item);
        }}
        conversations={conversations}
        selectedConversation={selectedConversation}
      />
      <NewConversation />
      <ChatTitle
        selectedConversation={selectedConversation}
        onDeleteConversation={() => {}}
      />
      {conversationContent}
      <ChatForm
        selectedConversation={selectedConversation}
        onMessageSubmitted={(item) => {
          postMessage(user.token, {
            message: item,
            image: "",
            type: "text",
            senderId: user._id,
            email: user.email,
            chatId: selectedConversation.id,
          }).then((res) => {
            setMessages(res.data);
          });
        }}
      />
    </div>
  );
};

export default ChatShell;
