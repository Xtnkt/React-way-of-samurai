import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div >
            <div >
                <img src='https://pbs.twimg.com/profile_banners/958008249068019713/1623959964/1500x500' alt='Ocean' className= {classes.img} />
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;