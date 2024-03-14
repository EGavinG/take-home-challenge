import "./ArticleView.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleView = ({ articles }) => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id && articles.length > 0) {
      const articleIndex = parseInt(id); // Parse id as an integer
      if (articleIndex >= 0 && articleIndex < articles.length) {
        setArticle(articles[articleIndex]);
      }
    }
  }, [id, articles]);

  return (
    <>
      {article ? (
        <div className="article-main">
          <div className="img-container">
            <img src={article.urlToImage} alt="" />
          </div>
          <div className="article-details">
            <a className="details-title" href={article.url}>
              {article.title}
            </a>
            <p>{article.author}</p>
            <p>{article.publishedAt}</p>
            <p>{article.description}</p>
            <a href={article.url}>Read More</a>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default ArticleView;
