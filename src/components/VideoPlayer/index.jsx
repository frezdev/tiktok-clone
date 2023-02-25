import { useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from './VideoDescription'

export default function VideoPlayer ({ src, author, description, albumCover }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        onClick={handlePlay}
        className={styles.video}
        src={src}
        loop
        controls={false}
        ref={video}
      />
      <i
        className={playerClassName}
        onClick={handlePlay}
      />
      <VideoPlayerActions />
      <VideoDescription
        description={description}
        albumCover={albumCover}
        author={author}
      />
    </div>
  )
}
