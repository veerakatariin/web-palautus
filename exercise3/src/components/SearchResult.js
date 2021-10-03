import React from 'react';
import styles from './SearchResult.module.css';

let ratingImage;

export default function SearchResult(props) {
  if (props.rating >= 5 && props.rating < 6){ratingImage="fivestars.png"}
  else if (props.rating >= 4 && props.rating < 5) {ratingImage = "fourstars.png"}
  else if (props.rating >= 3 && props.rating < 4) {ratingImage = "threestars.png"}
  else if (props.rating >= 2 && props.rating < 3) {ratingImage = "twostars.png"}
  else {ratingImage="onestar.png"}
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={styles.manufacturer}><div>{ props.manufacturer }</div></div>
          <div className={ styles.price }><div>${ props.price }</div></div>
          <div className={styles.rating}><img src={`/images/${ratingImage}`}/></div>
        </div>
    </div>
  )
}
