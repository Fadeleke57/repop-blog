import React, { useEffect, useState} from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch('https://repop-blog-server.onrender.com/post/' + id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (files && files[0]) {
      data.append('file', files[0]);
    }
    // Debugging: Print out all cookies
    //console.log('Document Cookies:', document.cookie);

    ///const tokenCookie = document.cookie
    //if (!tokenCookie) {
     /// console.error('No token found in cookies');
    //  return;
    ///}
    //const token = tokenCookie.split('=')[1];
  
    //console.log('Token:', token);
  
    const response = await fetch('https://repop-blog-server.onrender.com/post', {
      method: 'PUT',
      body: data,
      credentials: 'include'
    });
    
      if (response.ok) {
        setRedirect(true);
      } else {
        // Check if the response is JSON or plain text
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          console.error('Error updating post:', errorData);
        } else {
          const errorText = await response.text();
          console.error('Error updating post:', errorText);
        }
      }
    }

  if (redirect) {
    return <Navigate to={'/post/' + id} />
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={ev => setSummary(ev.target.value)}
      />
      <input
        type="file"
        onChange={(ev) => setFiles(ev.target.files)}
      />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: '5px' }}>Update post</button>
    </form>
  );
}