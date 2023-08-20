import '../ItemRow/style.css';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const ItemRow = (props) => {

    return(
        <tr className='ItemRow_tr' id={props.id}>
            <td className='ItemRow_td'>{props.name}</td>
            <td className='ItemRow_td'>{props.quantity}</td>
            <td className='ItemRow_td'><CheckIcon/> <DeleteIcon/> </td>
        </tr>
    );
}

export default ItemRow;