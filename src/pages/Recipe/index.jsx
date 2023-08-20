import '../Recipe/style.css';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CommentsContainer from '../../components/CommentsContainer/index';
import AddCalendar from '../../components/AddCalendar/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipe = () => {
    const recipe_id = localStorage.getItem("recipe_id");
    const token = localStorage.getItem("token");

    ////////////////////////////////////Open add recipe form
    const [isPopupVisible, setPopupVisibility] = useState(false);


    ////////////////////////////////////get Recipe
    const [name, setName] = useState('trysetName')
    const [cuisine, setCuisine] = useState('trysetCuisine')
    const [ingredients, setIngredients] = useState('trysetIngredients')
    const [imageUrl, setImageUrl] = useState('')

    const getRecipe = async () => {
        await axios.get(`http://127.0.0.1:8000/api/recipe/${recipe_id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            // console.log(response.data.data);
            setName(response.data.data.name);
            setCuisine(response.data.data.cuisine);
            setIngredients(response.data.data.ingredients);
            setImageUrl(response.data.data.new_image_url);
        })
        .catch(error => {
          console.log(error);
        });
    };

    ///////////////////////////////////////////////Like

    const [like, setLike] = useState('0');
    const [isLiked, setIsLiked] = useState(false);

    const handleAddButtonClick = () => {
        setPopupVisibility(true);
    }

    const getIsLiked = async () => {
        await axios.get(`http://127.0.0.1:8000/api/like/${recipe_id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            // console.log(response.data.data.is_liked);
            setIsLiked(response.data.data.is_liked);
        })
        .catch(error => {
          console.log(error);
        });
    };

    const getLikes = async () => {
        await axios.get(`http://127.0.0.1:8000/api/like/count/${recipe_id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            // console.log(response.data.data);
            setLike(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };

    const handleLikeBtn = () => {
        if (isLiked) {
            axios.delete(`http://127.0.0.1:8000/api/like/destroy/${recipe_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                // console.log(response.data)
                setIsLiked(false);
                getLikes();
            })
            .catch(error => {
                console.log(error);
            });
        } else {
            const postData = { recipe_id};
            axios.post(`http://127.0.0.1:8000/api/like/store`, postData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                // console.log(response.data)
                setIsLiked(true);
                getLikes();
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    ///////////////////////////////////////////////////////////////////////Checked if has this recipe
    const [hasThis, setHasThis] = useState(false);
    const getHsaThis = async () => {
        await axios.get(`http://127.0.0.1:8000/api/recipe/thisRecipe/${recipe_id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data.data);
            setHasThis(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };

    const deleteRecipe = (event) =>{
        event.preventDefault();

        axios.delete(`http://127.0.0.1:8000/api/recipe/destroy/${recipe_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data);
            window.location.href = '/MyRecipes';
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getLikes();
        getIsLiked();
        getRecipe();
        getHsaThis();
    }, []);

    return(

        <div className='Recipe'>
            <div className='Recipe_nav'><Nav/></div>
            {hasThis && <div className='delete_section'><button onClick={deleteRecipe}>Delete</button></div>}
            <div className='Recipe_up'>
                <div className='left_side'>
                    <img src={imageUrl} alt=''></img>
                    <div className='title'>
                        <h1>{name}</h1>
                        <div  className={`likes ${isLiked ? 'liked' : ''}`}>{like}<FavoriteIcon className={`icon ${isLiked?'liked':''}`} onClick={handleLikeBtn}/></div>
                    </div>
                    <div className='social_media'>
                        <InstagramIcon className='icon'/>
                        <FacebookIcon className='icon'/>
                        <LinkedInIcon className='icon'/>
                        <YouTubeIcon className='icon'/>
                        <WhatsAppIcon className='icon'/>
                    </div>
                    
                </div>
                <div className="right_side">
                    <div className='Recipe_Cuisine'>
                        <h2>Cuisine: {cuisine}</h2>
                        <button onClick={handleAddButtonClick}>Add to Calendar</button>
                    </div>
                    <div className='Recipe_Ingredients'>
                        <h2>Ingredients</h2>
                        <p>{ingredients}</p> 
                    </div>                    

                </div>
            </div>
            <div className="Recipe_down">
                <CommentsContainer/>
            </div>
            {isPopupVisible && <AddCalendar name={name} onClose={() => setPopupVisibility(false)} />}
            <div className='Recipe_bottom'><div className='footer'><Footer/></div></div>
        </div>
    );
}

export default Recipe;