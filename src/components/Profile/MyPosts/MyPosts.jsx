import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsDataElements = props.postsData.map(p => <Post img={p.img} likesCount={p.likesCount} message={p.message}/>);

    return (
        <div className={classes.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add new post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsDataElements}
            </div>
        </div>
    )
}

export default MyPosts;