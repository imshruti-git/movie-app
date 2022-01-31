import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from '../../components/SingleContent/SingleContent';

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );

    
    setContent(data.results);
  };

  useEffect(() => {
    
    fetchTrending();
    
  }, []);

  return (
    <>
      <span className='title'>Trending</span>
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
    </>
  ) 
};

export default Trending;
