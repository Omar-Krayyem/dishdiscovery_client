import React from "react";
import '../AddCalendar/style.css'

const AddCalendar = ({ onClose, name }) =>{

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="AddCalendar">
            <div className="AddCalendar_container">
                <h1 className="title">Add Plan Meal</h1>
                <form className="CalendarForm" onSubmit={handleSubmit}>
                    <div className="text_feild">
                        <label className="CalendarLabel">Recipe Name</label><br></br>
                        <input type="text" value={name} ></input> 
                    </div>
                    <div className="Date">
                        <label className="CalendarLabel">Date</label><br></br>
                        <input type="date"></input> 
                    </div>
                    <button className="CalendarAddbtn">Add</button>
                    <button className="CalendarCloebtn" onClick={onClose}>Close</button>
                </form>
            </div>  
        </div>
    );
} 

export default AddCalendar;