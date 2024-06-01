import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../components/Editor';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(e) {
    e.preventDefault();

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    if (files && files[0]) {
      data.append('file', files[0]);
    }

    await fetch('https://repop-blog-server.onrender.com/post', {
      method: 'POST',
      body: data,
      credentials: 'include'
    });

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={createNewPost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFiles(e.target.files)}
      />
      <Editor value={content} onChange={setContent} />
      <button type="submit" style={{ marginTop: '5px' }}>Create Post</button>
    </form>
  );
}