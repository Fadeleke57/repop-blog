import {Link} from "react-router-dom";

export default function Post() {

  return (
    <div className="post">
      <div className="image">
        <Link to={`/`}>
          <img src={'https://cdn.openai.com/hello-gpt-4o/robot-writers-block-01.jpg?w=640&q=90&fm=webp'} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <div>
            <Link to={`/`}>
            <h2>Title</h2>
            </Link>
            <p className="info">
            <a className="author">Bob Ways</a>
            <time>May 15, 2024</time>
            </p>
            <p className="summary">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>             
        </div>
      </div>
    </div>
  );
}