import React from 'react'
import styles from './Content.module.css'
const Content = ({note}) => {
    return (
        <div className={styles.container}>
            <div className={styles.innerDiv}>
            <p>{note.text}</p>
            <div className={styles.bottom}>
                <div className={styles.dtime}>{note.date}</div>
                <div className={styles.dtime}>{note.time}</div>
            </div>
            </div>
        </div>
    )
}

export default Content