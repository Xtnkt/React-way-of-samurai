import React from 'react';
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialogs + ' ' + classes.active}>
                    Vlad
                </div>
                <div className={classes.dialogs}>
                    Sanya
                </div>
                <div className={classes.dialogs}>
                    Misha
                </div>
                <div className={classes.dialogs}>
                    Roma
                </div>
                <div className={classes.dialogs}>
                    Alex
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hello
                </div>
                <div className={classes.message}>
                    Omg, it's you?
                </div>
                <div className={classes.message}>
                    Lets learn way of samurai!
                </div>
            </div>
        </div>
    )
}

export default Dialogs;