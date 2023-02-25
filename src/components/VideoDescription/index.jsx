import React from 'react'
import SongTicker from '../SongTicker'
import styles from './styles.module.css'

export default function VideoDescription ({ author, description, songTitle }) {
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
        <SongTicker songTitle={songTitle} />
      </div>
    </div>
  )
}
