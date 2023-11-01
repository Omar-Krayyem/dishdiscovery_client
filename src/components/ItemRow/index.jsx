import '../ItemRow/style.css';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';

const ItemRow = (props) => {

    const deleteItem = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token")

        axios.delete(`http://127.0.0.1:8000/api/list/destroy/${props.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data.data);
            props.onItemDeleted(props.id);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return(
        <tr className='ItemRow_tr' id={props.id}>
            <td className='ItemRow_td'>{props.name}</td>
            <td className='ItemRow_td'>{props.quantity}</td>
            <td className='ItemRow_td' ><CheckIcon onClick={deleteItem}/> <DeleteIcon onClick={deleteItem}/> </td>
        </tr>
    );
}

export default ItemRow;