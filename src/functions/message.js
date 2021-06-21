import axios from "axios";

export const getUserMessage = async (authtoken, payload) =>
  await axios.get(
    `${process.env.REACT_APP_API}/message` + `?chatId=${payload}`,
    {
      headers: {
        authtoken,
      },
    }
  );

export const getAllChats = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/chat`, {
    headers: {
      authtoken,
    },
  });

export const postMessage = async (authtoken, payload) =>
  await axios.post(`${process.env.REACT_APP_API}/message`, payload, {
    headers: {
      authtoken,
    },
  });
