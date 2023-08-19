import '../Card/style.css';
import {Link} from "react-router-dom";

const Card = (props) => {
  return (
    <Link className='card_link' to={``}>
        <div className="card" id="card">
            <div className="card_img"><img src="https://feelgoodfoodie.net/wp-content/uploads/2023/04/Lebanese-Tabbouleh-Salad-09.jpg" alt=""></img></div>
            <div className="card_name">{props.name}</div>
        </div>
    </Link>
  );
}

export default Card;