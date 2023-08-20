import React, { useState } from "react";
import '../AddRecipe/style.css'
import axios from 'axios';

const AddRecipe = ({ onClose }) =>{

    let [name, setName] = useState("");
    let [cuisine, setCuisine] = useState("");
    let [ingredients, setIngredients] = useState("");
    let [image, setImage] = useState("");

    const addRecipe = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        const postData = { name, cuisine, ingredients, image };

        console.log(postData)
    
        axios.post('http://127.0.0.1:8000/api/recipe/store', postData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data);
            window.location.reload();
            onClose();
        })
        .catch(error => {
            console.log(error);
        });
    }


    return (
        <div class="AddRecipe">
            <div className="AddRecipe_container">
                <h1 class="title" >Add Recipe</h1>
                <form enctype = 'multipart/form-data' className="RecipreForm">
                    <div class="text_feild">
                        <label className="RecipeLabel">Recipe Name</label><br></br>
                        <input 
                        type="text" 
                        placeholder="Recipe Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ></input> 
                    </div>
                    <div class="text_feild">
                        <label className="RecipeLabel">Cuisine</label><br></br>
                        <input 
                        type="text" 
                        placeholder="Cuisine"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                        ></input> 
                    </div>
                    <div class="text_feild">
                        <label className="RecipeLabel">Ingredients</label><br></br>
                        <textarea 
                        type="text" 
                        placeholder="Ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        ></textarea> 
                    </div>
                    <div class="upload">
                        <label className="RecipeLabel">Image</label>
                        <label class="file-label">Choose an image<input 
                        type="file" 
                        onChange ={(e) => setImage(e.target.files[0])}
                        /></label>
                    </div>
                    <button className="RecipeAddbtn" onClick={addRecipe}>Add</button>
                    <button className="RecipeCloebtn" onClick={onClose}>Close</button>
                </form>
            </div>  
        </div>
    );
} 

export default AddRecipe;