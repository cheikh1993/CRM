import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
const CardClient = () => {
  return (
    <div  className={styles.container}>
      <div className={styles.top}>
       <div className={styles.topProfil}>
          <Image
            src={"/cheikh.png"}
            className={styles.img}
            width={44}
            height={44}
          />
          <div className={styles.info}>
            <h2  className={styles.titleInfo}>Cheikh Faye</h2>
            <p className={styles.pInfo}>Fugiat laborum non ani</p>
          </div>
       </div>
        <div className={styles.icon}>
            <span className={styles.icon3}>...</span>
          </div>
        </div>
      <div className={styles.bottom}>
        <h3 className={styles.titleL}>Lead</h3>
        <div className={styles.leadC}>
          <span className={styles.pL}>#27898</span>
          <button className={styles.bntL}>new lead</button>
        </div>
      </div>
    </div>
  )
}

export default CardClient