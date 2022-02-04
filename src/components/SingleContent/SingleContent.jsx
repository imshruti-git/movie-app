import { img_300, unavailable } from '../../config/config';
import './singlecontent.css';
import { Badge } from '@material-ui/core';
import ContentModal from '../modal/Modal';

const SingleContent = ({ id, poster, title, date, media_type, vote_average, }) => {

  return (
  <ContentModal id={id} media_type={media_type}>
    <Badge badgeContent={vote_average} color= {vote_average>7 ? 'primary' : 'secondary'} />
    <img className='images' src={poster? `${img_300}/${poster}` : unavailable} alt={title} />
    <b className='title'>{title}</b>
    <span className='subtitle'>{media_type === 'tv' ? 'TV Series' : 'Movie'}
    <span className='subtitle'>{date}</span> 
    </span>
  </ContentModal>
  );
};

export default SingleContent;