import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";


console.log(blogData);

function App() {

  const posts = blogData.posts.map((post) => {
    return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />;
  })
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about}/>
      {posts}
    </div>
  );
}

export default App;
