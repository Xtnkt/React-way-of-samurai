import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsDataElement = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageDataElement = props.messageData.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsDataElement}
            </div>
            <div className={classes.messages}>
                {messageDataElement}
            </div>
        </div>
    )
}

export default Dialogs;