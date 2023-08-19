import '../MyRecipes/style.css';
import Nav from '../../components/Nav/index';
import Card from '../../components/Card/index';
import Footer from '../../components/Footer/index';

const MyRecipes = () => {

    let id= 1;
    let name = 'Tabouleh';

    return(
        <div className='MyRecipes'>
            <div className='MyRecipes_nav'><Nav/></div>
            <div className='MyRecipes_header'>
                <div className='page_title'><h1>My Recipes</h1></div>
                <div className="addRecipe"><button>Add New Recipe</button></div>
            </div>
            <div className="cardContainer">
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
                <Card id={id} name={name}/>
            </div>
            <div><Footer/></div>
        </div>
    );
}

export default MyRecipes;