import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genre = ({setSelectedGenres, genres, setGenres, type }) => {


  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
     
      {genres && genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => setSelectedGenres(genre.id)}
        />
      ))}
    </div>
  );
};

export default Genre;