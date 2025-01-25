"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("sessionUpdated", (newData) => {
      console.log("Session Updated:", newData);
      setData(newData);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return data;
};

export default useSocket;
