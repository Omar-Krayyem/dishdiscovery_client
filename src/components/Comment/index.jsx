import '../Comment/style.css';

const CommentsContainer = (props) => {
    return(
        <div className='Comment'>
            <div className='username'>{props.firstname} {props.lastname}</div>
            <div className='text'>{props.text}</div>
        </div>
    );
}

export default CommentsContainer;