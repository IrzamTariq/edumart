import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import ChatShell from "./shell/ChatShell";

const Chats = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          <ChatShell />
        </div>
      </div>
    </div>
  );
};

export default Chats;
