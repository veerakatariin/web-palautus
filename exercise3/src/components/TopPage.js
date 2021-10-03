import React from "react";
import styles from './TopPage.module.css';

export default function TopPage() {

    return (
        <div className={ styles.header }>
            <div className={ styles.container }>
                <div style={{ paddingLeft: '200px', paddingRight: '20px'}}>Deliver to Finland</div>
                <div style={{ paddingLeft: '200px', paddingRight: '20px'}}>Account</div>
                <div style={{ paddingLeft: '200px', paddingRight: '20px'}}>Purchases and Returns</div>
                <div style={{ paddingLeft: '200px', paddingRight: '20px'}}>Cart</div>
            </div></div>
    )
}