import '../Card/style.css';
import {Link} from "react-router-dom";

const Card = (props) => {
  return (
    <Link className='card_link' to={``}>
        <div className="card" id="card">
            <div className="card_img"><img src={props.new_image_url} alt=""></img></div>
            {/* <div className="card_img"><img src={"http://127.0.0.1:8000/storage/recipe_images/" + props.image_url} alt=""></img></div> */}

            <div className="card_name">{props.name}</div>
        </div>
    </Link>
  );
}

export default Card;