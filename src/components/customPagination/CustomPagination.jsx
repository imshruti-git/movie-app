import Pagination from '@material-ui/lab/Pagination';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette:{
    type: "dark",
  },
})


const CustomPagination = ({ setPage, numOfPages = 10 }) => {

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0,0);
  };

  return (
    
      <div 
        style={{
          width:' 100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 15,
        }}
        >
        <ThemeProvider theme={theme}>
            <Pagination onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} color="primary"/>
        </ThemeProvider>
       
      </div>
    );
};

export default CustomPagination;

