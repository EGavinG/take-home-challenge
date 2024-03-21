import React, { useState, useEffect } from 'react';
import Article from '../Article/Article';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SearchBar from '../SearchBar/SearchBar';
import getFetch from '../../apiCalls'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFetch();
        setArticles(data.articles);
        setFilteredArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  const filterArticles = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length === 0 && searchTerm !== '') {
      setError(true);
    } else {
      setError(false);
    }
    setFilteredArticles(filtered);
  };

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

  if (error) {
    return <p>"Error: No results found for your search query. Please try again with different keywords or refine your search criteria."</p>;
  }

  return (
    <main>
      <SearchBar filterArticles={filterArticles} />
      {error && <p>No articles found for "{searchTerm}". Please try a different search term.</p>}
      <Carousel
        className="carousel"
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        customTransition="all 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        devicetype={isMobile ? 'mobile' : 'desktop'}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {filteredArticles.map((article, index) => (
          <Article key={index} article={article} index={index} />
        ))}
      </Carousel>
    </main>
  );
};

export default ArticleList;
