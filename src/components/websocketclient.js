import React, { useEffect, useState } from 'react';

const WebSocketClient = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000/ws');

    socket.onopen = () => {
      console.log('WebSocket connection established');
      socket.send('Hello Server');
    };

    socket.onmessage = (event) => {
      console.log('Message from server: ', event.data);
      setMessage(event.data);
    };

    socket.onerror = (error) => {
      console.log('WebSocket error: ', error);
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed', event);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Client</h1>
      <p>Received Message: {message}</p>
    </div>
  );
};

export default WebSocketClient;
