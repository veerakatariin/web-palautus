import React from "react";
import styles from './MainSection.module.css'


export default function MainSection(props) {
    return (
        <div className={'MainClass'}>
            <div className={styles.container}>
                <img src={`/images/${props.data.image}`}/>
            <div className={styles.topic}>
            <span style={{fontWeight:'700', color:'rgb(0, 81, 141)'}}>
                {props.data.maintopic} </span>| {props.data.mainbody}</div> 
            </div>
            </div>
    )
}