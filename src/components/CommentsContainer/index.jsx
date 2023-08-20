import '../CommentsContainer/style.css';
import Comment from '../../components/Comment/index';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import React, { useState } from 'react';

const CommentsContainer = () => {

    const [newComment, setNewComment] = useState('');

    let id = 2;
    let name = 'omar_krayyem'
    let text = 'I like this recipe'

    const handleCommentAdd = () => {
        console.log('Adding comment:', newComment);
        setNewComment('');
    };

    return(
        <div className='CommentsContainer'>
            <div className="CommentsTitle"><h1>Comments</h1></div>
            <div className='Comments'>
                <Comment id={id} name={name} text={text}/>
                <Comment id={id} name={name} text={text}/>
                <Comment id={id} name={name} text={text}/>
                <Comment id={id} name={name} text={text}/>
            </div>
            <div className="addComment">
                <input 
                    type='text'
                    placeholder='Add your comment...'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></input>
                <SendRoundedIcon
                className="sendIcon"
                onClick={handleCommentAdd}
                />
            </div>
        </div>
    );
}

export default CommentsContainer;