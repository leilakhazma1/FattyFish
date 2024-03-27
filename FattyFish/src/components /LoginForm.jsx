import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';

const LoginForm = () => {
  const { userComments, setUserComments } = useUserContext();
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserComments([...userComments, comment]);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
