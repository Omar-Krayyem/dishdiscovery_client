import '../Home/style.css';
import Nav from '../../components/Nav/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Card from '../../components/Card/index';

const Home = () => {

  let id= 1;
  let name = 'Tabouleh';

  return (
    <div className='home'>
      <div className='home_nav'><Nav/></div>
      <div className='header'><Header/></div>
      <div className="cardContainer">
        <Card id={id} name={name}/>
        <Card id={id} name={name}/>
        <Card id={id} name={name}/>
        <Card id={id} name={name}/>
        <Card id={id} name={name}/>
        <Card id={id} name={name}/>
        <Card id={id} name={name}/>
      </div>
      <div className='footer'><Footer/></div>
    </div>
  );
}

export default Home;