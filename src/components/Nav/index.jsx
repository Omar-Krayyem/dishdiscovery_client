import '../Nav/style.css';

const Nav = () => {
    return(
        <div className='nav'>
            <div className='leftSide'>
                <div className="logo"><h1>DishDiscovery</h1></div>
                <div className="btn">My Recipes</div>
                <div className="btn">Shopping List</div>
                <div className="btn">Calendar</div>
            </div>
            <div className='rightSide'>
                <div className="btn">Logout</div>
            </div>
        </div>
    );
}

export default Nav;