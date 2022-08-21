import React from 'react';
//import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add new post</button>
            </div>
            <Post img = "http://img1.liveinternet.ru/images/attach/c/8/102/784/102784519__obitatli_morea.png" likesCount = "4" message = "Hello, how are you?" />
            <Post img = "https://clipartart.com/images/angler-fish-clipart-13.png" likesCount = "2" message = "Let's play a game!" />
            <Post img = "https://i.pinimg.com/originals/da/69/6b/da696b031eee3d2822e94b44180ef52a.png" likesCount = "1" message = "Arrr"/>
        </div>
    )
}
export default MyPosts;