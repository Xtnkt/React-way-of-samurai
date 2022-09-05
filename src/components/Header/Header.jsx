import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div>
                <img
                    src='https://c.tenor.com/LoYLZWgZo5cAAAAC/pokemon-magikarp.gif'
                    alt='fish logo'/>
            </div>
            <div className={classes.siteName}>
                Fish Place
            </div>
        </header>
    )
}
export default Header;
