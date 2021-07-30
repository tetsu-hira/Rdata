import React from "react";
import React  from react';

export const MessageForm React.FC = () => {
  const [message, setMessage] = React.useState('');

  const hanleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('次のメッセージが送信されました: ' + message);
  };

  return <form onSubmit={handleSubmit}>
    <label>メッセージ：
      <input type="text" value={message} onChange={handleChange} />
    </label>
    <input type="submit" value="送信" />
  </form>;
};