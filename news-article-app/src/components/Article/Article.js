import './Article.css';

const Article = ({ article }) => {
  const { title, urlToImage, description, publishedAt } = article;

  return (
    <div className='Article'>
      <article>
        <h3>{title}</h3>
          <img src={urlToImage} alt={description} />
        <p>{description}</p>
        <time dateTime={publishedAt}>
          {new Date(publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
      </article>
    </div>
  );
};

export default Article;