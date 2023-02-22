import { useRef, useState } from 'react'
import videoSrc from '../../../assets/video.mp4'
import styles from './styles.module.css'

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlay = () => {
    playing
      ? video.current.pause()
      : video.current.play()

    setPlaying(!playing)
  }

  return (
    <>
      <video
        className={styles.video}
        src={videoSrc}
        controls={false}
        ref={video}
      />
      <button
        className={styles.player}
        onClick={handlePlay}
      />
    </>
  )
}
