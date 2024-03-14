import './App.css';
import ArticleList from '../ArticleList/ArticleList';
import { articleData } from '../../articleData';

function App() {
 
  return (
    <div className="App">
      <ArticleList articles={articleData.articles} /> 
    </div>
  );
}

export default App;
