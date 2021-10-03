import React from "react";
import styles from './TopPage.module.css';

export default function TopPage() {
return (
        <div className={ styles.background }>
            <div className={ styles.container }>
                <div className={styles.hs}>HELSINGIN SANOMAT</div>
                <div style={{ paddingLeft: '1%', paddingRight: '1%' }}>
                    Uutiset</div>
                <div style={{ paddingLeft: '1%', paddingRight: '1%' }}>
                    Lehdet</div>
                <div style={{paddingLeft:'6%', paddingRight:'1%'}}>
                <div className={styles.subscribe}>
                <div style={{ paddingLeft: '1%', paddingRight: '1%' }}>
                    Tilaa</div></div></div>
                <div style={{ paddingLeft: '1%', paddingRight: '1%' }}>
                    Kirjaudu</div>
                <div style={{ paddingLeft: '1%', paddingRight: '1%' }}>
                    Hae</div>
                <div style={{paddingLeft:'1%', paddingRight:'0%'}}>
                    Valikko</div>
                <div className={styles.padding}>
                    <div className={ styles.more }></div><div className={ styles.more }></div><div className={ styles.more }></div>
                </div>
            </div>
        </div>
    )
}