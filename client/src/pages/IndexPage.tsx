import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import './IndexPage.css'
import UtilityButton from "../components/UtilityButton";
import FilterBar from "../components/FilterBar";
import { Link } from "react-router-dom";

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

  let first = null 
  let second = null
  let third = null
  if (posts.length >= 3) {
      first = posts[0] 
      second = posts[1]
      third = posts[2]
  }

  return (
    <>
      <div className="title-wrapper">
        <h1>FernIt Blog</h1>
      </div>

      <div className="subtitle-wrapper">
        
        <div>
          <h2>Featured</h2>
        </div>

        <div className="utility-links">
          <div className="search-wrapper">
            <UtilityButton icon="search">Search</UtilityButton>
          </div>
          <div className="filter-wrapper">
            <UtilityButton icon="filter">Filter</UtilityButton>
          </div>
        </div>

      </div>

      <div className="featured-content-wrapper">

        <div className="featured-post">
          {first && 
          <Link className="post-wrapper" to={`/post/${first._id}`}>
            <Post {...first} postConfigs={{isFeaturedPost : true, imageAllowed : true}}></Post>
          </Link>
          }
        </div>

        <div className="featured-posts-ni">
            {second && 
            <div className="ni-wrapper">
              <Post {...second} postConfigs={{isFeaturedPost : true, imageAllowed : false}}></Post>
            </div>
            }
            {third && 
            <div className="ni-wrapper">
              <Post {...third} postConfigs={{isFeaturedPost : true, imageAllowed : false}}></Post>
            </div>
            }
        </div>
      </div>

      <FilterBar/>

      <div className="content-wrapper">
        {posts.length > 0 && posts.map((post, id) => (
          <Link className="post-wrapper" to={`/post/${post._id}`}>
            <Post key={id} {...post} postConfigs={{isFeaturedPost : false, imageAllowed : true}}/>
          </Link>
        ))}
      </div>
    </>

  );
}     