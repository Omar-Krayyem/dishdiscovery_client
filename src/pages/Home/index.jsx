import '../Home/style.css';
import Nav from '../../components/Nav/index';
import Header from '../../components/Header/index';
const Home = () => {


  return (
    <div className='home'>
      <div className='home_nav'><Nav/></div>
      <div className='header'><Header/></div>
        Home page
    </div>
  );
}

export default Home;