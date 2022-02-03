import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from '../../components/SingleContent/SingleContent';
import './trending.css';
import CustomPagination from '../../components/customPagination/CustomPagination';

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    
  },[page]);

  return (
    <>
      <span className='pagetitle'>Trending</span>
        <div className="body">
               {content && content.map((item)=>(
                        <SingleContent 
                          key={item.id} 
                          poster={item.poster_path} 
                          id={item.id}
                          title={item.title || item.name}
                          date={item.first_air_date || item.release_date}
                          media_type={item.media_type}
                          vote_average={item.vote_average}
                          />
                ))}
                   
        </div>
        <CustomPagination setPage={setPage}/>
    </>
  ) 
};

export default Trending;
