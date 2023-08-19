import '../Header/style.css';

const Header = () => {
  return (
    <div className='Header'>
        <div className='search'>
            <input type='text' placeholder='Search recipes here...'></input>
        </div>
        <div className='txt'>
            <div className='title'>What is favorite suisines?</div>
            <div className='subtitle'>personalize your experience</div>
        </div>
    </div>
  );
}

export default Header;