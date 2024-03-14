const getFetch = () => {
    return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=464aa776fe2347d2b4ff62b72178b1a6')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data; 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error; 
      });
  };
  
  export default getFetch;
  