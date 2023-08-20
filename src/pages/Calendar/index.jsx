import '../Calendar/style.css';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import RecipeRow from '../../components/RecipeRow/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {

    let [recipes , setRecipes] = useState([]);

    const getItems = async () => {

        const token = localStorage.getItem("token");

        await axios.get(`http://127.0.0.1:8000/api/calendar`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data.data);
            setRecipes(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    
    useEffect(() => {
        getItems();
    }, []);
    return(
        <div className='Calendar'>
            <div className="Calendar_top">
                <div className='Calendar_nav'><Nav/></div>
                <div className='Calendar_header'>
                    <div className='page_title'><h1>Calendar</h1></div>
                </div>
                <div className='Calendar_body'>
                    <table className='Calendar_table'>
                        <thead className='Calendar_thead'>
                            <tr className=''>
                                <th className='Calendar_th top_left'>Recipe Name</th>
                                <th className='Calendar_th'>Cuisine</th>
                                <th className='Calendar_th'>Date</th>
                                <th className='Calendar_th top_right'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe) => (
                                <RecipeRow 
                                    id={recipe.id}
                                    name={recipe.recipe.name}
                                    cuisine={recipe.recipe.cuisine}
                                    date={recipe.date}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='Calendar_bottom'><div className='footer'><Footer/></div></div>
        </div>
    );
}

export default Calendar;