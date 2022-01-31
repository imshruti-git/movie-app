import './App.css';
import { Container } from '@material-ui/core';
import Trending from './screens/trending/Trending';
import Header from './components/header/Header';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Series from './screens/series/Series';
import Movies from './screens/movies/Movies';
import Search from './screens/search/Search';

function App() {
  return (
    <Router>
      <Header />
       <div className="app">
         <Container>
          <Routes>
          <Route exact path="/" element={<Trending />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/series" element={<Series />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
         </Container>
        
        </div>
      <Navigation />
    </Router>
  );
}

export default App;
