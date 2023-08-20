import '../CommentsContainer/style.css';
import Comment from '../../components/Comment/index';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentsContainer = () => {

    const [newComment, setNewComment] = useState('');
    let [comments , setComments] = useState([]);

    let id = 2;
    let name = 'omar_krayyem'
    let text = 'I like this recipe'

    const handleCommentAdd = () => {
        console.log('Adding comment:', newComment);
        setNewComment('');
    };

    let recipe_id = 4;

    const getComments = async () => {

        const token = localStorage.getItem("token");

        await axios.get(`http://127.0.0.1:8000/api/comments/${recipe_id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data.data);
            setComments(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    
    useEffect(() => {
        getComments();
    }, []);

    return(
        <div className='CommentsContainer'>
            <div className="CommentsTitle"><h1>Comments</h1></div>
            <div className='Comments'>
                {comments.map((comment) => (
                    <Comment id={comment.id} name={comment.text} text={comment.text} first_name={comment.user.first_name} last_name={comment.user.last_name}/>
                ))}
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