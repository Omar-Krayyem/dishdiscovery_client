import '../Footer/style.css';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='up'>
            <div className='left'><h1>DishDiscovery</h1><br></br>You make it special</div>
            <p>
                Place to save some time in the kitchen and spend more time with your friends and family? Then a wide selection
                of easy recipes is just what you need. We have gathered an inspiring mix of tasty and easy recipes for you 
                and your family to enjoy right here.
            </p>
        </div>
        <div className='down'> &copy;DishDiscovery. All rights reserved.</div>
    </div>
  );
}

export default Footer;