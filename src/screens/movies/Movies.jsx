import { useEffect, useState } from 'react';
import axios from "axios";
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/customPagination/CustomPagination';
import Genre from '../../components/genre/Genre';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genre, setGenre] = useState([]);
  const [selectedgenre, setSelectedgenre] = useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );

    
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    
  }, [page]);


  return (
    <>
      <span className='pagetitle'>Movies</span>
        <Genre 
            type="movie"
            genre={genre}
            setGenre={setGenre}
            selectedgenre={selectedgenre}
            setSelectedgenre={setSelectedgenre}
            setPage={setPage}
          />
          <div className="body">
              {content && content.map((item)=>(
                      <SingleContent 
                        key={item.id} 
                        poster={item.poster_path} 
                        id={item.id}
                        title={item.title || item.name}
                        date={item.first_air_date || item.release_date}
                        media_type='movie'
                        vote_average={item.vote_average}
                        />
              ))}             
          </div>
          <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
    </>
    
  );
};

export default Movies;
