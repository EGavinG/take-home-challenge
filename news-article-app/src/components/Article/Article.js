import React from 'react';
import './Article.css';
import { Link } from 'react-router-dom';

const Article = ({ article, index }) => {
  const { id, title, urlToImage, description, publishedAt } = article;

  return (
    <div className='Article'>
      <Link to={`/article/${index}`} className="article-link">
        <article>
          <h3>{title}</h3>
          {urlToImage && <img src={urlToImage} alt={description} />}
          {description && <p>{description}</p>}
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </article>
      </Link>
    </div>
  );
};

export default Article;
