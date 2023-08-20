import '../Recipe/style.css';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Recipe = () => {
    return(

        <div className='Recipe'>
            <div className='Recipe_nav'><Nav/></div>
            <div className='Recipe_up'>
                <div className='left_side'>
                    <img src='https://feelgoodfoodie.net/wp-content/uploads/2023/04/Lebanese-Tabbouleh-Salad-09.jpg' alt=''></img>
                    <div className='title'>
                        <h1>Tabouleh</h1>
                        <div className='likes'>20 <FavoriteIcon className='icon'/></div>
                    </div>
                    <div className='social_media'>
                        <InstagramIcon className='icon'/>
                        <FacebookIcon className='icon'/>
                        <LinkedInIcon className='icon'/>
                        <YouTubeIcon className='icon'/>
                        <WhatsAppIcon className='icon'/>
                    </div>
                    
                </div>
                <div className="right_side">
                    <div className='Recipe_Cuisine'><h2>Cuisine: Lebanese</h2></div>
                    <div className='Recipe_Ingredients'>
                        <h2>Ingredients</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eaque perferendis dolores aperiam, nemo eligendi? Assumenda laboriosam reiciendis debitis veritatis accusantium, dicta totam quae id laborum tempora iste pariatur blanditiis quibusdam modi possimus provident minima porro qui nesciunt atque consectetur neque. Molestias, suscipit tempora facere veritatis eos eveniet incidunt facilis accusantium accusamus, delectus quae id nesciunt impedit reiciendis officiis sit labore? Perspiciatis aut alias iusto perferendis fugiat corrupti consequatur cum saepe facere unde, deserunt labore dolore voluptates repudiandae aliquid esse tempore inventore ea. Nesciunt, odio quod, quos dolores praesentium ad odit similique doloremque eos, voluptatibus enim corrupti nemo asperiores rem.</p> 
                    </div>                    

                </div>
            </div>
            <div className="Recipe_down">

            </div>
            <div className='Recipe_bottom'><div className='footer'><Footer/></div></div>
        </div>
    );
}

export default Recipe;