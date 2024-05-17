import {Link} from "react-router-dom";
import {formatISO9075} from 'date-fns'

export default function Post({_id, title, summary, cover, content, author, createdAt}) {

  return (
    <div className="post">
      <div className="image">
        <Link to={`/posts/${_id}`}>
          <img src={`http://localhost:4000/${cover}`} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <div>
            <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
            </Link>
            <p className="info">
            <Link className="author" to={`/post/${_id}`}>{author.username}</Link>
            <time>{formatISO9075(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
            </p>
            <p className="summary">{summary}</p>             
        </div>
      </div>
    </div>
  );
}