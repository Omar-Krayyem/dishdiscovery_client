import '../Comment/style.css';

const CommentsContainer = (props) => {
    return(
        <div className='Comment'>
            <div className='username'>{props.name}</div>
            <div className='text'>{props.text}</div>
        </div>
    );
}

export default CommentsContainer;