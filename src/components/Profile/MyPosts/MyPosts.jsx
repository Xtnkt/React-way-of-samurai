import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = [
        {id: 1, img:"http://img1.liveinternet.ru/images/attach/c/8/102/784/102784519__obitatli_morea.png", likesCount: 4, message: "Hello, how are you?"},
        {id: 2, img:"https://clipartart.com/images/angler-fish-clipart-13.png", likesCount: 2, message: "Let's play a game!"},
        {id: 3, img:"https://i.pinimg.com/originals/da/69/6b/da696b031eee3d2822e94b44180ef52a.png", likesCount: 1, message: "Arrr"}
    ]

    let postsDataElements = postsData.map( p => <Post img={p.img} likesCount={p.likesCount} message={p.message} /> );

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
                { postsDataElements }
            </div>
        </div>
    )
}
export default MyPosts;