import { useState } from 'react'
import { Heart } from '../icons/Heart'
import { Comment } from '../icons/Comment'
import { Share } from '../icons/Share'
import styles from './styles.module.css'

export default function VideoPlayerActions (props) {
  const { likes = 1522, comments = 550, shares = 500, hearted = false } = props
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    // window.alert('like')
    setLiked(!liked)
  }

  const handleComment = () => {
    window.alert('comment')
  }

  const handleShare = () => {
    window.alert('share')
  }

  return (
    <aside className={styles.actions}>
      <button onClick={handleLike} className={styles.action}>
        <Heart fill={(hearted || liked) ? '#fe2c55' : 'currentColor'} width='40' />
        <span title='likes'>{likes}</span>
      </button>

      <button onClick={handleComment} className={styles.action}>
        <Comment width='40' />
        <span title='comments'>{comments}</span>
      </button>

      <button onClick={handleShare} className={styles.action}>
        <Share width='40' />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}
