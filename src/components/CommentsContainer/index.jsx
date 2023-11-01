import '../CommentsContainer/style.css';
import Comment from '../../components/Comment/index';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentsContainer = () => {
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);

    const recipe_id = localStorage.getItem("recipe_id");
    const token = localStorage.getItem("token");

    const first_name = localStorage.getItem("first_name");
    const last_name = localStorage.getItem("last_name");

    const AddComment = () => {
        const postData = { text, recipe_id };
        axios.post('http://127.0.0.1:8000/api/comments/store', postData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response);
            setText("");
            const newComment = { text, first_name, last_name };
            setComments(prevComments => [...prevComments, newComment]);
        })
        .catch(error => {
            console.log(error);
            setText("");
        });
    };

    const getComments = async () => {
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

    return (
        <div className='CommentsContainer'>
            <div className="CommentsTitle"><h1>Comments</h1></div>
            <div className='Comments'>
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        text={comment.text}
                        firstname={comment.first_name ? comment.first_name : ''}
                        lastname={comment.last_name ? comment.last_name : ''}
                    />
                ))}
            </div>
            <div className="addComment">
                <input
                    type='text'
                    placeholder='Add your comment...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></input>
                <SendRoundedIcon
                    className="sendIcon"
                    onClick={AddComment}
                />
            </div>
        </div>
    );
}

export default CommentsContainer;