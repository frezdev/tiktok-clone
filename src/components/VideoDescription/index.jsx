import React from 'react'
import styles from './styles.module.css'

export default function VideoDescription ({ author, description }) {
  return (
    <div className={styles.description}>
      <div className={styles.textWrapper}>
        <strong>
          <a className={styles.author} href={`/user/${author}`}>
            @{author}
          </a>
        </strong>
        <p className={styles.text}>
          {description}
        </p>
      </div>
    </div>
  )
}
