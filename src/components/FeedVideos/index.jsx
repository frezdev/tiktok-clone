import React from 'react'
import videoSrc from '../../../assets/video.mp4'
import videoSrc2 from '../../../assets/video2.mp4'
import albumCoverImg from '../../../assets/albumCoverImg.jpg'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'leidyceledon',
    description: '2 meses de Argentina vs Croacia | no copyright infringement #messi #argentina #fypシ #parati #julianalvarez #messifans #foryou #scaloneta #fyp #modric',
    likes: 123,
    shares: 234,
    songTitle: 'sonido original - leidyceledon',
    albumCover: albumCoverImg,
    comments: 357,
    src: videoSrc
  },
  {
    id: 2,
    author: 'yenrva',
    description: '2 meses de Argentina vs Croacia | no copyright infringement #messi #argentina #fypシ #parati #julianalvarez #messifans #foryou #scaloneta #fyp #modric',
    likes: 123,
    shares: 234,
    songTitle: 'sonido original - leidyceledon',
    albumCover: albumCoverImg,
    comments: 357,
    src: videoSrc2
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    ))
  )
}
