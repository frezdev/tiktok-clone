import MusicIcon from '../icons/MusicIcon'
import Marquee from 'react-fast-marquee'
import styles from './styles.module.css'

export default function SongTicker ({ songTitle }) {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <Marquee
        gradient={false}
        speed={50}
      >
        {songTitle}
      </Marquee>
    </div>
  )
}
