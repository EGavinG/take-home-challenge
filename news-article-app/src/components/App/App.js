import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ArticleList from "../ArticleList/ArticleList";
import ArticleView from "../ArticleView/ArticleView";
import getFetch from "../../apiCalls";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getFetch(); // Fetch articles from API
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="App">
      <Router>
        <Link to="/">
          <h1>The Daily GET</h1>
        </Link>
        <h2>Trending Headlines:</h2>
        <Routes>
          <Route
            path="/article/:id"
            element={<ArticleView articles={articles} />} // Pass fetched articles directly
          />
          <Route
            path="/"
            element={<ArticleList articles={articles} />} // Pass fetched articles directly
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

