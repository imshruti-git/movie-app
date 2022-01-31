import { img_300, unavailable } from '../../config/config';
import './singlecontent.css'
const SingleContent = ({ id, poster, title, date, media_type, vote_average, }) => {

  return (
  <div className='media'>
    <img src={poster? `${img_300}/${poster}` : unavailable} />
    <b className='title'>{title}</b>
    <span className='subtitle'>{media_type === 'tv' ? 'TV Series' : 'Movie'}</span>
    <span className='subtitle'>{date}</span> 
  </div>
  );
};

export default SingleContent;
