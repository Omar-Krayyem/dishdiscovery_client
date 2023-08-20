import '../Calendar/style.css';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import RecipeRow from '../../components/RecipeRow/index';

const Calendar = () => {

    let id = 1;
    let name = 'Tabouleh';
    let cuisine = 'Lebanese';
    let date = '2023-8-23'
    return(
        <div className='Calendar'>
            <div className="Calendar_top">
                <div className='Calendar_nav'><Nav/></div>
                <div className='Calendar_header'>
                    <div className='page_title'><h1>Calendar</h1></div>
                </div>
                <div className='Calendar_body'>
                    <table className='Calendar_table'>
                        <thead className='Calendar_thead'>
                            <tr className=''>
                                <th className='Calendar_th top_left'>Recipe Name</th>
                                <th className='Calendar_th'>Cuisine</th>
                                <th className='Calendar_th'>Date</th>
                                <th className='Calendar_th top_right'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RecipeRow id={id} name={name} cuisine={cuisine} date={date}/>
                            <RecipeRow id={id} name={name} cuisine={cuisine} date={date}/>
                            <RecipeRow id={id} name={name} cuisine={cuisine} date={date}/>
                            <RecipeRow id={id} name={name} cuisine={cuisine} date={date}/>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='Calendar_bottom'><div className='footer'><Footer/></div></div>
        </div>
    );
}

export default Calendar;