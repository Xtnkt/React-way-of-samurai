import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className = {classes.content}>
        <div className = {classes.img}>
            <img src='https://cdn.fishki.net/upload/post/2020/01/10/3196335/103039-plashh-pejzazhi-gor-more-ozero-pribrezhnyye-i-okeanicheskiye-relyefy-2560x1440.jpg' alt='Ocean' />
        </div>
        <div >
            ava+description
        </div>
        <div>
            my posts
        </div>
        <div className = {classes.item} >
            new posts
        </div>
        <div className = {classes.item} >
            post 1
        </div>
        <div className = {classes.item} >
            post 2
        </div>
    </div>
}

export default Profile;