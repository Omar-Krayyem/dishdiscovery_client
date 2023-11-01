import '../AddItem/style.css';
import React, { useState } from 'react';
import axios from 'axios';

const AddItem = ({ onClose, onItemAdded }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addItem = () => {
        const token = localStorage.getItem("token");
        const postData = { name, quantity };

        axios.post('http://127.0.0.1:8000/api/list/store', postData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response);
            onItemAdded(postData);
            onClose();
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="AddItem">
            <div className="AddItem_container">
                <h1 className="title">Add Item</h1>
                <form className="ItemForm" onSubmit={handleSubmit}>
                    <div className="text_feild">
                        <label className="ItemLabel">Item Name</label><br></br>
                        <input
                            type="text"
                            placeholder="Item Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className="text_feild">
                        <label className="ItemLabel">Quantity</label><br></br>
                        <input
                            type="number"
                            placeholder="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        ></input>
                    </div>
                    <button className="RecipeAddbtn" onClick={addItem}>Add</button>
                    <button className="RecipeCloebtn" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
}

export default AddItem;
