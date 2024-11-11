import React from 'react'
import styles from "./page.module.css"
import CardClient from '@/components/CardClient/page'
const Client = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.topTitle}>La liste des clients</h1>
        <div className={styles.topRight}>
          <button className={styles.topBtn}>+New</button>
          <input type="text" placeholder='Recherche client' className={styles.input} />
        </div>
      </div>
      <div className={styles.containerCardClient}>
        <p>New client this wweek</p>
        <div className={styles.cardClientc}>
          <CardClient />
          <CardClient />
          <CardClient />
        </div>

      </div>
    </div>
  )
}

export default Client