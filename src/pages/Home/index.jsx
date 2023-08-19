import '../Home/style.css';
import Nav from '../../components/Nav/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

const Home = () => {


  return (
    <div className='home'>
      <div className='home_nav'><Nav/></div>
      <div className='header'><Header/></div>
      <div className='footer'><Footer/></div>
    </div>
  );
}

export default Home;