import { img_300, unavailable } from '../../config/config';
import './singlecontent.css';
import { Badge } from '@material-ui/core';

const SingleContent = ({ id, poster, title, date, media_type, vote_average, }) => {

  return (
  <div className='media'>
    <Badge badgeContent={vote_average} color= {vote_average>7 ? 'primary' : 'secondary'} />
    <img className='images' src={poster? `${img_300}/${poster}` : unavailable} />
    <b className='title'>{title}</b>
    <span className='subtitle'>{media_type === 'tv' ? 'TV Series' : 'Movie'}
    <span className='subtitle'>{date}</span> 
    </span>
  </div>
  );
};

export default SingleContent;
