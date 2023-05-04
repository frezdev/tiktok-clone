import { useEffect, useState } from 'react'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'
import { getVideos } from '../../services'

export default function FeedVideos () {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getVideos()
      .then(current => {
        const [data, error] = current
        if (error) return setError(error)
        setVideos(data)
      })
  }, [])

  if (error) {
    return (
      <span>{error}</span>
    )
  }

  return (
    <div className={styles.container}>
      {
        videos.length > 0
          ? (
              videos?.map(video => (
                <div key={video.id} className={styles.item}>
                  <VideoPlayer {...video} />
                </div>
              ))
            )
          : <h3>No hay videos</h3>
      }
    </div>
  )
}
