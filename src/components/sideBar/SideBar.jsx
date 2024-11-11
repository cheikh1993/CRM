import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
export const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBarContainer}>
        <div className={styles.mainTop}>
          <div className={styles.top}>
            <Image
            src='/logo.png'
              width={50}
              height={50}
              alt='logo'
              className={styles.img}
            />
            <div className={styles.info}>
              <h3 className={styles.titleTop}>RCM APP</h3>
              <span className={styles.category}>Category</span>
            </div>

          </div>
          <div className={styles.mainNav}>
            <div className={styles.sideBarMenu}>
              <Link href={'/'} className={styles.item}>
                <span>$</span>
                <div
                  className={styles.link}
                >bashboard</div>
              </Link>
              <Link href='/lead' className={styles.item}>
                <span>#</span>
                <div
                >Leads</div>
              </Link>
              <Link href={'/client'} className={styles.item}>
                <span>$</span>
                <div
                  className={styles.link}
                >clients</div>
              </Link>
              <Link href={'/'} className={styles.item}>
                <span>$</span>
                <div
                  className={styles.link}
                >task management</div>
              </Link>
              <Link href={'/'} className={styles.item}>
                <span>$</span>
                <div
                  className={styles.link}
                >invoice</div>
              </Link>
              <Link href={'/'} className={styles.item}>
                <span>$</span>
                <div
                  className={styles.link}
                >settings</div>
              </Link>
            </div>
          </div>

        </div>
        <div className={styles.bottom}>
          bottom
        </div>
      </div>

    </div>
  )
}
