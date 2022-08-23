import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}> 
            <div>
            <img src='https://cdn.icon-icons.com/icons2/3317/PNG/512/deep_anglerfish_fish_angler_animal_icon_209487.png' alt='fish logo' /> 
            </div>
            <div className={classes.siteName}>
                Fish Place
            </div>
        </header>
    )   
}
export default Header;