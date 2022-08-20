import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item} >
            <img src='https://clipartart.com/images/angler-fish-clipart-13.png' />
            post
            <div>
                <button>like</button>
            </div>
        </div>
    )   
}

export default Post;