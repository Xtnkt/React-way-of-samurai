import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div >
            <div className={classes.img}>
                <img src='https://cdn.fishki.net/upload/post/2020/01/10/3196335/103039-plashh-pejzazhi-gor-more-ozero-pribrezhnyye-i-okeanicheskiye-relyefy-2560x1440.jpg' alt='Ocean' />
            </div>
            <div >
                ava+description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;