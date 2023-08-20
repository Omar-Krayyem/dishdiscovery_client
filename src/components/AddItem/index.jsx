import React from "react";
import '../AddItem/style.css'

const AddItem = ({ onClose }) =>{

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div class="AddItem">
            <div className="AddItem_container">
                <h1 class="title" >Add Item</h1>
                <form className="ItemForm" onSubmit={handleSubmit}>
                    <div class="text_feild">
                        <label className="ItemLabel">Item Name</label><br></br>
                        <input type="text" placeholder="Item Name"></input> 
                    </div>
                    <div class="text_feild">
                        <label className="ItemLabel">Quantity</label><br></br>
                        <input type="number" placeholder="number"></input> 
                    </div>
                    <button className="RecipeAddbtn">Add</button>
                    <button className="RecipeCloebtn" onClick={onClose}>Close</button>
                </form>
            </div>  
        </div>
    );
} 

export default AddItem;