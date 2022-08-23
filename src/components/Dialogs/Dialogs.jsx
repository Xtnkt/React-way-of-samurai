import React from 'react';
import classes from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Vlad" id="1" />
                <DialogItem name="Sanya" id="2" />
                <DialogItem name="Masha" id="3" />
                <DialogItem name="Roma" id="4" />
                <DialogItem name="Kate" id="5" />
            </div>
            <div className={classes.messages}>
               <Message message = "Hi!" />
               <Message message = "Have a nice day" />
               <Message message = "When will I see you? " />
               <Message message = "Omg" />
               <Message message = "Dimych)" />
            </div>
        </div>
    )
}

export default Dialogs;

const DialogItem = (props) => {
    return (
        <div className={classes.dialogs + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}