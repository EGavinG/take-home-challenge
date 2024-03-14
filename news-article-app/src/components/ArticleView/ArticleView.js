import "./ArticleView.css";
import { useParams } from "react-router-dom";

const ArticleView = ({ articles }) => {
  const { id } = useParams();

  const articleIndex = articles.findIndex(article => article.id === id);
  const article = articles[articleIndex];

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


export default ArticleView