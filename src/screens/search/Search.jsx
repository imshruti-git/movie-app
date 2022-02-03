import { useState, useEffect } from 'react';
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import { Tab, Tabs, Button, TextField, createTheme, ThemeProvider } from '@material-ui/core';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/customPagination/CustomPagination';

const theme = createTheme({
  palette:{
    type: "dark",
    primary: {
      main: "#fff",
    },
  },
})

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [ searchtext, setSearchtext ] = useState ('');
  const [ content, setContent ] = useState ([]);
  const [numOfPages, setNumOfPages] = useState();


  const handleChange = (event, newValue) => {
    setType(newValue);
    setPage(1);
  };

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? 'movie' : 'tv'}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchtext}&page=${page}&include_adult=false`
    );

    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    
  }, [type, page]);

  return (
    <>
      <ThemeProvider theme={theme}>
          <div style={{ display: 'flex', margin: '15px 25px' }}>
              <TextField 
                  style={{ flex: 1 }} 
                  label="SEARCH" 
                  variant="filled" 
                  onChange={(e) => setSearchtext(e.target.value)}
              />
              <Button 
                  onClick={fetchSearch} 
                  variant= 'contained' 
                  style={{ marginLeft: 10}}
              >
                  <SearchIcon />
              </Button>
          </div>

          <Tabs
              value={type}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
              centered
              style={{ paddingBottom: 5 }}
          >
              <Tab  style={{ width: "50%" }} label="SEARCH TV SERIES" />
              <Tab  style={{ width: "50%" }} label="SEARCH MOVIES" />
          </Tabs>
      </ThemeProvider>
      <div className="body">
              {content && content.map((item)=>(
                      <SingleContent 
                        key={item.id} 
                        poster={item.poster_path} 
                        id={item.id}
                        title={item.title || item.name}
                        date={item.first_air_date || item.release_date}
                        media_type={type ? 'movie' : 'tv'}
                        vote_average={item.vote_average}
                        />
              ))}   
              {searchtext && !content &&
               (type ? <h2> No movies found</h2> : <h2>No TV series found</h2>)}          
          </div>
          {numOfPages > 1 &&
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
          }
          
    </>
  );
};

export default Search;
