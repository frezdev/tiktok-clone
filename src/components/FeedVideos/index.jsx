import React from 'react'
import videoSrc from '../../../assets/video.mp4'
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
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9e142ff7c726a4e58180028cbd334166~c5_100x100.jpeg?x-expires=1677261600&x-signature=SUNbJqLGzn5TQ2lCDmTZcblZ02E%3D',
    comments: 357,
    src: videoSrc
  },
  {
    id: 2,
    author: 'leidyceledon',
    description: '2 meses de Argentina vs Croacia | no copyright infringement #messi #argentina #fypシ #parati #julianalvarez #messifans #foryou #scaloneta #fyp #modric',
    likes: 123,
    shares: 234,
    songTitle: 'sonido original - leidyceledon',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9e142ff7c726a4e58180028cbd334166~c5_100x100.jpeg?x-expires=1677261600&x-signature=SUNbJqLGzn5TQ2lCDmTZcblZ02E%3D',
    comments: 357,
    src: videoSrc
  },
  {
    id: 3,
    author: 'leidyceledon',
    description: '2 meses de Argentina vs Croacia | no copyright infringement #messi #argentina #fypシ #parati #julianalvarez #messifans #foryou #scaloneta #fyp #modric',
    likes: 123,
    shares: 234,
    songTitle: 'sonido original - leidyceledon',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9e142ff7c726a4e58180028cbd334166~c5_100x100.jpeg?x-expires=1677261600&x-signature=SUNbJqLGzn5TQ2lCDmTZcblZ02E%3D',
    comments: 357,
    src: videoSrc
  },
  {
    id: 4,
    author: 'leidyceledon',
    description: '2 meses de Argentina vs Croacia | no copyright infringement #messi #argentina #fypシ #parati #julianalvarez #messifans #foryou #scaloneta #fyp #modric',
    likes: 123,
    shares: 234,
    songTitle: 'sonido original - leidyceledon',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9e142ff7c726a4e58180028cbd334166~c5_100x100.jpeg?x-expires=1677261600&x-signature=SUNbJqLGzn5TQ2lCDmTZcblZ02E%3D',
    comments: 357,
    src: videoSrc
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
