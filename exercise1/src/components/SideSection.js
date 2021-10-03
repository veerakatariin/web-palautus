import React from "react";
import styles from './SideSection.module.css'

let i = 0;

export default function SideSection(props) {
    i=i+0.5;
    return (
            <div className={styles.container}><div className={styles.line}></div><div className={styles.mostviewed}><div style={{fontWeight: '700', fontFamily: 'Lucida', fontSize:'40px', color:'rgb(65, 150, 164)'}}>{i}</div>
            <div style={{paddingLeft:'20px', fontSize:'18px'}}><span style={{fontWeight:'700', fontSize:'18px'}}>{props.data.sidetopic} | </span>
            {props.data.sidebody}</div> </div>
            </div>
    )
}