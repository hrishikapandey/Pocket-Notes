import React from 'react'
import backGroundImage from "../../assets/Background.png"
import styles from './NotesHomePage.module.css'
import lock from "../../assets/lock-icon.svg";
const NotesHomePage = () => {
    return (
        <div className={styles.container}>
            <img src={backGroundImage} alt="" className={styles.frontLogo} />
            <h1 className={styles.header}>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.<br />
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <div className={styles.bottom}>
                <img src={lock} alt="lock-icon" className={styles.lock}/>
                <p className={styles.bottomText}>end-to-end encrypted</p>
            </div>
        </div>
    )
}

export default NotesHomePage