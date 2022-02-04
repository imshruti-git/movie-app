import { useEffect, useState } from 'react';
import axios from "axios";
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/customPagination/CustomPagination';
import Genre from '../../components/genre/Genre';
//import useGenre from "../../hooks/useGenre";

const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState();
  //const genreforURL = useGenre(selectedgenre);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${selectedGenres}`
    );

    console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
    // eslint-disable-next-line
  }, [page, selectedGenres]);

  return (
    <>
      <span className='pagetitle'>tv series</span>
      <Genre 
            type="tv"
            genres={genres}
            setGenres={setGenres}
            setSelectedGenres={setSelectedGenres}
          />
      <div className="body">
              {content && content.map((item)=>(
                      <SingleContent 
                        key={item.id} 
                        poster={item.poster_path} 
                        id={item.id}
                        title={item.title || item.name}
                        date={item.first_air_date || item.release_date}
                        media_type='tv'
                        vote_average={item.vote_average}
                        />
              ))}             
          </div>
          <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
    </>
    
  );
};

export default Series;
