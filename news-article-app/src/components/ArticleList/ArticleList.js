import './ArticleList.css';
import Article from '../Article/Article';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ArticleList = ({ articles }) => {
  const sortedArticles = articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const isMobile = window.innerWidth <= 464;

  return (
    <main>
      <h1>The Daily GET</h1>
      <Carousel
        className='carousel'
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        customTransition='all 500ms ease-in-out'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        devicetype={isMobile ? 'mobile' : 'desktop'}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {sortedArticles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </Carousel>
    </main>
  );
};

export default ArticleList;
