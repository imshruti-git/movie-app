import Chip from '@material-ui/core/Chip';
import { useEffect } from 'react';
import axios from "axios";

const Genre = ({ genre, setGenre, selectedgenre, setSelectedgenre, type, setPage }) => {

    const fetchGenre = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
    
        
        setGenre(data.genres);
        
      };
      
      useEffect(() => {
        fetchGenre();
        
        return () => {
            setGenre({});
        };
        
      }, []);
        return (
                <div style={{ padding: '20px' }}>
                    {genre && genre.map((item)=>(
                      <Chip
                        style={{ padding: '5px' , margin: '5px' }}
                        key={item.id} 
                        label={item.name} 
                        clickable 
                        size='small'
                        />
              ))}  
                     
                </div>
            );
};

export default Genre;
