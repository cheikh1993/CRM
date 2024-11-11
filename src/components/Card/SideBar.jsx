import React from 'react'
import styles from "./page.module.css"
const Card = ({ color, colorBackgroundIcon, price, desc, shadowColor }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color}} >
      <div className={styles.cardInfo}>
        <div className={styles.iconc} 
        style={{backgroundColor: colorBackgroundIcon,
          boxShadow: `0px 17px 35px ${shadowColor}, 0px 0px 2px ${shadowColor}`}}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Calendar-Edit-1--Streamline-Ultimate" height="24" width="24"><desc>Calendar Edit 1 Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M22.63 14.786 15 22.416l-3.75 0.75 0.75 -3.75 7.63 -7.63c0.3968 -0.3967 0.9349 -0.6195 1.496 -0.6195s1.0992 0.2228 1.496 0.6195l0.008 0.008c0.1967 0.1964 0.3527 0.4296 0.4591 0.6863 0.1065 0.2567 0.1613 0.5318 0.1613 0.8097 0 0.2779 -0.0548 0.5531 -0.1613 0.8098 -0.1064 0.2567 -0.2624 0.4899 -0.4591 0.6862Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M9 17.25H2.25c-0.39782 0 -0.77936 -0.158 -1.06066 -0.4393C0.908035 16.5294 0.75 16.1478 0.75 15.75V3.76501c0 -0.39782 0.158035 -0.77935 0.43934 -1.06066 0.2813 -0.2813 0.66284 -0.43934 1.06066 -0.43934h13.5c0.3978 0 0.7794 0.15804 1.0607 0.43934 0.2813 0.28131 0.4393 0.66284 0.4393 1.06066v4.485" stroke-width="1.5"></path><path stroke="#000000" stroke-linejoin="round" d="M0.75 6.75h16.5" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M5.24298 3.75v-3" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12.743 3.75v-3" stroke-width="1.5"></path></svg>
          </div>
        <div className={styles.number}>
            <span className={styles.price}
             style={{color: colorBackgroundIcon}}>{price}k</span>
          <p className={styles.price2}>{desc}</p>
          </div>
        </div>
    </div>
  )
}

export default Card