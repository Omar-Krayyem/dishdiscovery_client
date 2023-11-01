import '../ShoppingList/style.css';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import AddItem from '../../components/AddItem/index';
import ItemRow from '../../components/ItemRow/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShoppingList = () => {

    let [items , setItems] = useState([]);
    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleAddButtonClick = () => {
        setPopupVisibility(true);
    }

    const token = localStorage.getItem("token");

    const getItems = async () => {
        await axios.get(`http://127.0.0.1:8000/api/list`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data.data);
            setItems(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };

    const handleItemsDeleted = (deletedItemId) => {
        setItems(items.filter(item => item.id !== deletedItemId));
    };

    const handleItemAdded = (newItem) => {
        setItems([...items, newItem]);
    };
    
    useEffect(() => {
        getItems();
    }, []);

    return(
        <div className='ShoppingList'>
            <div className="ShoppingList_top">
                <div className='ShoppingList_nav'><Nav/></div>
                <div className='ShoppingList_header'>
                    <div className='page_title'><h1>Shopping List</h1></div>
                    <div className="addlistitem"><button onClick={handleAddButtonClick}>Add New Item</button></div>
                </div>
                <div className='shoppingList_body'>
                    <table className='shoppingList_table'>
                        <thead className='shoppingList_thead'>
                            <tr className=''>
                                <th className='shoppingList_th top_left'>Item Name</th>
                                <th className='shoppingList_th'>Quantity</th>
                                <th className='shoppingList_th top_right'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <ItemRow id={item.id} name={item.name} quantity={item.quantity} onItemDeleted={handleItemsDeleted}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isPopupVisible && <AddItem onClose={() => setPopupVisibility(false)} onItemAdded={handleItemAdded} />}
            <div className='ShoppingList_bottom'><div className='footer'><Footer/></div></div>
        </div>
    );
}

export default ShoppingList;