import React from "react";
import styles from './NewsNotification.module.css'

export default function NewsNotification(props) {
    return (
            <div className={styles.container}>
            <span className={styles.span}>{props.data.notificationtopic}</span>{props.data.notificationbody}
            <span className={styles.span}>{props.data.ad}</span>{props.data.adtext}
            </div>
    )
}