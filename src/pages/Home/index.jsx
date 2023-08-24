import '../Home/style.css';
import Nav from '../../components/Nav/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Card from '../../components/Card/index';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Home = () => {

  let [cards, setCards] = useState([]);

  const getRecipes = async () => {
    const token = localStorage.getItem("token");

    await axios.get(`http://127.0.0.1:8000/api/Home`, {
        "headers": {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        console.log(response.data.data);
        setCards(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className='home'>
      <div className='home_nav'><Nav/></div>
      <div className='header'><Header/></div>
      <div className="cardContainer">
        {cards.map((card) => (
         <Card id={card.id} name={card.name} new_image_url={card.new_image_url}/>
        // <Card id={card.id} name={card.name} image_url={card.image_url}/>
        ))}
      </div>
      <div className='footer'><Footer/></div>
    </div>
  );
}

export default Home;