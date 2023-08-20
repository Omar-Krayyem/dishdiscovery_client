import '../RecipeRow/style.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const RecipeRow = (props) => {

    const deleteRecipe = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token")

        axios.delete(`http://127.0.0.1:8000/api/calendar/destroy/${props.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response);
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
    }

    return(
        <tr className='RecipeRow_tr' id={props.id}>
            <td className='RecipeRow_td'>{props.name}</td>
            <td className='RecipeRow_td'>{props.cuisine}</td>
            <td className='RecipeRow_td'>{props.date}</td>
            <td className='RecipeRow_td'><DeleteIcon onClick={deleteRecipe}/> </td>
        </tr>
    );
}

export default RecipeRow;