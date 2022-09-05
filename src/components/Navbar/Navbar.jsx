import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';
import {Button} from 'antd';
import 'antd/dist/antd.css';

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to='/Profile' className={navData => navData.isActive ? classes.active : classes.item}
                ><Buttons id={1}/> </NavLink>
            </div>
            <div id={2}>
                <NavLink to='/Dialogs' className={navData => navData.isActive ? classes.active : classes.item}
                > <Buttons id={2}/> </NavLink>
            </div>
            <div>
                <NavLink to="/News"
                         className={navData => navData.isActive ? classes.active : classes.item}><Buttons
                    id={3}/></NavLink>
            </div>
            <div>
                <NavLink to='/Music'
                         className={navData => navData.isActive ? classes.active : classes.item}><Buttons
                    id={4}/></NavLink>
            </div>
            <div>
                <NavLink to='/Settings'
                         className={navData => navData.isActive ? classes.active : classes.item}><Buttons
                    id={5}/></NavLink>
            </div>
            <div>
                <NavLink to='/Friends'
                         className={navData => navData.isActive ? classes.active : classes.item}><Buttons/></NavLink>
            </div>
            <div className={classes.item}>
                <div className={classes.container}>
                    <div className={classes.item}>
                        <img src="https://img1.liveinternet.ru/images/attach/c/8/102/784/102784519__obitatli_morea.png"/>
                            <b>Sasha</b>
                    </div>
                    <div className={classes.item}>
                        <img src="https://www.pngall.com/wp-content/uploads/5/Piranha-Fish-PNG-Picture.png"/>
                            <b>Vlad</b>
                    </div>
                    <div className={classes.item}>
                        <img src="https://i.pinimg.com/originals/da/69/6b/da696b031eee3d2822e94b44180ef52a.png"/>
                            <b>Dimon</b>
                    </div>
                </div>
            </div>
        </nav>
)
}

function Buttons(props)
    {
        if (props.id === 1) {
            return (
                <Button className={classes.button} type="primary">Profile</Button>
            )
        } else if (props.id === 2) {
            return (
                <Button className={classes.button} type="primary">Message</Button>
            )
        } else if (props.id === 3) {
            return (
                <Button className={classes.button} type="primary">News</Button>
            )
        } else if (props.id === 4) {
            return (
                <Button className={classes.button} type="primary">Music</Button>
            )
        } else if (props.id === 5) {
            return (
                <Button className={classes.button} type="primary">Settings</Button>
            )
        } else {
            return (
                <Button className={classes.button_friends} type="primary">Friends</Button>
            )
        }

    }

export default Navbar;