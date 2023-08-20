import '../ShoppingList/style.css';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import AddItem from '../../components/AddItem/index'
import React, { useState } from 'react';

const ShoppingList = () => {

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleAddButtonClick = () => {
        setPopupVisibility(true);
    }

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
                            <tr className='shoppingList_tr'>
                                <td className='shoppingList_td'>Cucumber</td>
                                <td className='shoppingList_td'>1</td>
                                <td className='shoppingList_td'><CheckIcon/> <DeleteIcon/> </td>
                            </tr>
                            <tr className='shoppingList_tr'>
                                <td className='shoppingList_td'>Cucumber</td>
                                <td className='shoppingList_td'>1</td>
                                <td className='shoppingList_td'><CheckIcon/> <DeleteIcon/></td>
                            </tr>
                            <tr className='shoppingList_tr'>
                                <td className='shoppingList_td'>Cucumber</td>
                                <td className='shoppingList_td'>1</td>
                                <td className='shoppingList_td'><CheckIcon/> <DeleteIcon/></td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
            {isPopupVisible && <AddItem onClose={() => setPopupVisibility(false)} />}
            <div className='ShoppingList_bottom'><div className='footer'><Footer/></div></div>
        </div>
    );
}

export default ShoppingList;