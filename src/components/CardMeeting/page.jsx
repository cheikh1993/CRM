import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
const CardMeeting = ({backgroundColor, message, time, startTime}) => {
  return (
    <div className={styles.container} style={{backgroundColor: backgroundColor}}>
      <div className={styles.infoc}>
       {startTime && <button className={styles.min}>{startTime}</button>}
        <div className={styles.left}>
          <p className={styles.title1}>{message}</p>
          <div className={styles.person}>
            <div className={styles.imgcontainer}>
              <Image
                src={"/cheikh.png"}
                width={24}
                height={24}
                className={styles.img}
              />
            
           </div>
            <div className={styles.imgcontainer}>
              <Image
                src={"/logo.png"}
                width={24}
                height={24}
                className={styles.img}
              />
            
           </div>
            <div className={styles.imgcontainer}>
              <Image
                src={"/cheikh.png"}
                width={24}
                height={24}
                className={styles.img}
              />
            
           </div>
            <div className={styles.imgcontainer}>
              <Image
                src={"/logo.png"}
                width={24}
                height={24}
                className={styles.img}
              />
            
           </div>
          </div>
        </div>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  )
}

export default CardMeeting