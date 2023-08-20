import '../RecipeRow/style.css';
import DeleteIcon from '@mui/icons-material/Delete';

const RecipeRow = (props) => {

    return(
        <tr className='RecipeRow_tr' id={props.id}>
            <td className='RecipeRow_td'>{props.name}</td>
            <td className='RecipeRow_td'>{props.cuisine}</td>
            <td className='RecipeRow_td'>{props.date}</td>
            <td className='RecipeRow_td'><DeleteIcon/> </td>
        </tr>
    );
}

export default RecipeRow;