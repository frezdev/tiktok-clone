import { useRef } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import VideoPlayerActions from '../VideoPlayerActions'
import VideoDescription from '../VideoDescription'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'

export default function VideoPlayer (props) {
  const video = useRef(null)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  const { src } = props

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        onClick={handlePlay}
        controls={false}
        ref={video}
        src={src}
        loop
      />
      <i
        className={playerClassName}
        onClick={handlePlay}
      />
      <VideoPlayerActions {...props} />
      <VideoDescription {...props} />
    </div>
  )
}
