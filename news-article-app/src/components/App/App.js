import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ArticleList from "../ArticleList/ArticleList";
import ArticleView from "../ArticleView/ArticleView";
import { articleData } from "../../articleData";

function App() {
  const articlesWithIds = articleData.articles.map((article, index) => ({
    ...article,
    id: index.toString(), 
  }));

  return (
    <div className="App">
      <Router>
        <Link to="/">
          <h1>The Daily GET</h1>
        </Link>
        <h2>Trending:</h2>
        <Routes>
          <Route
            path="/article/:id"
            element={<ArticleView articles={articlesWithIds} />}
          />
          <Route
            path="/"
            element={<ArticleList articles={articlesWithIds} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

