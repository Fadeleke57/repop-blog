import React from "react";
import {Link} from "react-router-dom";
import {formatISO9075} from 'date-fns'
import './Post.css'

type Author = {
  username: String
}

type PostProps = {
  _id: Number,
  title: String,
  summary: String,
  cover: String,
  content: String,
  author: Author,
  createdAt: string | number,
  postConfigs: {
    isFeaturedPost : boolean,
    imageAllowed: boolean
  },
}

export default function Post({_id, title, summary, cover, content, author, createdAt, postConfigs} : PostProps) {

  return (
    <Link className="post-link" to={`/post/${_id}`}>
      <div className="post">
        {cover && postConfigs.imageAllowed && postConfigs.isFeaturedPost &&
          <div className="image">
            <img src={`http://localhost:4000/${cover}`} alt=""/>
          </div>
        }
        {cover && !postConfigs.isFeaturedPost && postConfigs.imageAllowed &&
            <div className="image2">
              <img src={`http://localhost:4000/${cover}`} alt=""/>
            </div>
        }
        <div className="texts">
          <div>
              <span className="post-tag"><h3>Company</h3></span><br/>
              <h2 className="post-title">{title}</h2>
              <span className="info">
              <span className="author">{author.username}-</span>
              <time>{formatISO9075(new Date(createdAt))}</time>
              </span>
              <p className="summary">{summary}</p>             
          </div>
        </div>
      </div>
    </Link>
  );
}