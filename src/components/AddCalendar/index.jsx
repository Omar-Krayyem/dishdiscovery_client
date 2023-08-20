import '../AddCalendar/style.css'
import axios from 'axios';
import React, { useState } from 'react';

const AddCalendar = ({ onClose, name }) =>{

    const [date, setDate] = useState('');

    const recipe_id = localStorage.getItem("recipe_id")
    const token = localStorage.getItem("token");

    console.log(date);
    const addCalendar = (event) => {
        event.preventDefault();

        const postData = { recipe_id, date };
        axios.post('http://127.0.0.1:8000/api/calendar/store', postData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            
            console.log(response.data);
            onClose();
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="AddCalendar">
            <div className="AddCalendar_container">
                <h1 className="title">Add Plan Meal</h1>
                <form className="CalendarForm">
                    <div className="text_feild">
                        <label className="CalendarLabel">Recipe Name</label><br></br>
                        <input type="text" value={name} ></input> 
                    </div>
                    <div className="Date">
                        <label className="CalendarLabel">Date</label><br></br>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <button className="CalendarAddbtn" onClick={addCalendar}>Add</button>
                    <button className="CalendarCloebtn" onClick={onClose}>Close</button>
                </form>
            </div>  
        </div>
    );
} 

export default AddCalendar;