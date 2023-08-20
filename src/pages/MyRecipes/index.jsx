import '../MyRecipes/style.css';
import Nav from '../../components/Nav/index';
import Card from '../../components/Card/index';
import Footer from '../../components/Footer/index';
import AddRecipe from '../../components/AddRecipe/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyRecipes = () => {

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleAddButtonClick = () => {
        setPopupVisibility(true);
    }

    let [cards, setCards] = useState([]);

    const getRecipes = async () => {
        const token = localStorage.getItem("token");

        await axios.get(`http://127.0.0.1:8000/api/MyRecipes`, {
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

    return(
        <div className='MyRecipes'>
            <div className='MyRecipes_nav'><Nav/></div>
            <div className='MyRecipes_header'>
                <div className='page_title'><h1>My Recipes</h1></div>
                <div className="addRecipe"><button onClick={handleAddButtonClick}>Add New Recipe</button></div>
            </div>
            {isPopupVisible && <AddRecipe onClose={() => setPopupVisibility(false)} />}
            <div className="cardContainer">
                {cards.map((card) => (
                    <Card id={card.id} name={card.name} new_image_url={card.new_image_url}/>
                ))}
            </div>
            <div><Footer/></div>
            
        </div>
    );
}

export default MyRecipes;