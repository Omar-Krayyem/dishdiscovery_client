import '../Nav/style.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <div className='nav'>
            <div className='leftSide'>
                <NavLink className={'text_decoration'} to={'/Home'}><div className="logo"><h1>DishDiscovery</h1></div></NavLink>
                <NavLink className={'text_decoration'} to={'/MyRecipes'}><div className="btn">My Recipes</div></NavLink>
                <NavLink className={'text_decoration'} to={'/ShoppingList'}><div className="btn">Shopping List</div></NavLink>
                <NavLink className={'text_decoration'} to={'/Calendar'}><div className="btn">Calendar</div></NavLink>
            </div>
            <div className='rightSide'>
                <div className="btn">Logout</div>
            </div>
        </div>
    );
}

export default Nav;