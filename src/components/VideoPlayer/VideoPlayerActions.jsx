import { Heart } from '../icons/Heart'
import { Comment } from '../icons/Comment'
import { Share } from '../icons/Share'
import styles from './styles.module.css'

export default function VideoPlayerActions ({likes = 1522, comments = 550, shares = 500, hearted = false}) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart width='45' />
        <strong title='likes'>{likes}</strong>
      </div>

      <div className={styles.action}>
        <Comment width='45' />
        <strong title='comments'>{comments}</strong>
      </div>

      <div className={styles.action}>
        <Share width='45' />
        <strong title='shares'>{shares}</strong>
      </div>
    </aside>
  )
}