import "./header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0,0)} className='header'>
        🎥  it's movie time  🎥
    </span>
  ) 
};

export default Header;
