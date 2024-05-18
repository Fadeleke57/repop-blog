import React, { useEffect, useState } from "react";
import Post from "../components/Post";

type Author = {
    username: String
}
  
type PostType = {
    _id: Number,
    title: String,
    summary: String,
    cover: String,
    content: String,
    author: Author,
    createdAt: string,
}


export default function IndexPage() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then((posts: PostType[]) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <div>
      {posts.length > 0 && posts.map((post, id) => (
          <Post key={id} {...post} />
      ))}
    </div>
  );
}