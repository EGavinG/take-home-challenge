import './Article.css'

const Article = () => {


    return (
    <div className='Article'>
          <article>
            <h2>Article Headline</h2>
        <figure>
            <img src="" alt="Description of the image" />
            <figcaption>Caption for the image</figcaption>
        </figure>
            <p>Description of the article content.</p>
            <time datetime="2024-03-12">March 12, 2024</time>
            </article>
    </div>
    )
}

export default Article