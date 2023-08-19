import React from "react";
import '../AddRecipe/style.css'

const AddRecipe = ({ onClose }) =>{

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div class="AddRecipe">
            <div className="AddRecipe_container">
                <h1 class="title" >Add Recipe</h1>
                <form className="RecipreForm" onSubmit={handleSubmit}>
                    <div class="text_feild">
                        <label className="RecipeLabel">Recipe Name</label><br></br>
                        <input type="text" placeholder="Recipe Name"></input> 
                    </div>
                    <div class="text_feild">
                        <label className="RecipeLabel">Cuisine</label><br></br>
                        <input type="text" placeholder="Cuisine"></input> 
                    </div>
                    <div class="text_feild">
                        <label className="RecipeLabel">Ingredients</label><br></br>
                        <textarea type="text" placeholder="Ingredients"></textarea> 
                    </div>
                    <div class="upload">
                        <label className="RecipeLabel">Image</label>
                        <label class="file-label">Choose an image<input type="file" /></label>
                    </div>
                    <button className="RecipeAddbtn">Add</button>
                    <button className="RecipeCloebtn" onClick={onClose}>Close</button>
                </form>
            </div>  
        </div>
    );
} 

export default AddRecipe;