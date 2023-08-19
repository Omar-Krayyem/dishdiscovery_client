import '../MyRecipes/style.css';
import Nav from '../../components/Nav/index';
import Card from '../../components/Card/index';
import Footer from '../../components/Footer/index';
import AddRecipe from '../../components/AddRecipe/index';
import React, { useState } from 'react';

const MyRecipes = () => {

    let id= 1;
    let name = 'Tabouleh';

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleAddButtonClick = () => {
        setPopupVisibility(true);
    }

    return(
        <div className='MyRecipes'>
            <div className='MyRecipes_nav'><Nav/></div>
            <div className='MyRecipes_header'>
                <div className='page_title'><h1>My Recipes</h1></div>
                <div className="addRecipe"><button onClick={handleAddButtonClick}>Add New Recipe</button></div>
            </div>
            {isPopupVisible && <AddRecipe onClose={() => setPopupVisibility(false)} />}
            <div className="cardContainer">
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
            </div>
            <div><Footer/></div>
            
        </div>
    );
}

export default MyRecipes;