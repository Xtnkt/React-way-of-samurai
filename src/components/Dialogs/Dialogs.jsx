import React from 'react';
import classes from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Sanya' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'Roma' },
        { id: 5, name: 'Kate' }
    ]

    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Have a nice day' },
        { id: 3, message: 'When will I see you?' },
        { id: 4, message: 'Omg' },
        { id: 5, message: 'Dimych)' }
    ]

    let dialogsDataElement = dialogsData.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messageDataElement = messageData.map( m => <Message message={m.message} id={m.id} /> );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsDataElement }
            </div>
            <div className={classes.messages}>
                {messageDataElement}
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

