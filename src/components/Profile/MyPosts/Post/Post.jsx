import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item} >
            <img src={props.img} />
            {props.message}
            <div>
                <button>
                    {props.likesCount}
                </button>
                <button>likes</button>
            </div>
        </div>
    )
}
export default Post;