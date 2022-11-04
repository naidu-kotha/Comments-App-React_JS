/* eslint-disable react/no-unknown-property */
// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {reviewDetails, toggleLikeBtn, deleteReview} = props
  const {name, reviewText, isLiked, id, date, initialClassName} = reviewDetails

  const onClickLikeIcon = () => {
    toggleLikeBtn(id)
  }

  const onClickDeleteBtn = () => {
    deleteReview(id)
  }

  const likeBtnImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextClr = isLiked ? 'like-text-clr' : ''

  const commentedBefore = formatDistanceToNow(new Date(date))

  return (
    <>
      <li>
        <div className="comment-list">
          <p className={initialClassName}>{name[0].toUpperCase()}</p>
          <div className="name-comment">
            <div className="name-date">
              <p className="name">{name}</p>
              <p className="date">{commentedBefore}</p>
            </div>
            <p className="comment-text">{reviewText}</p>
          </div>
        </div>
        <div className="like-delete-container">
          <div className="like-container">
            <button type="button" className="btn" onClick={onClickLikeIcon}>
              <img src={likeBtnImg} className="like-img" alt="like" />
            </button>
            <p className={`like-text ${likeTextClr}`}>Like</p>
          </div>
          <button
            type="button"
            className="btn"
            testid="delete"
            onClick={onClickDeleteBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
        <hr className="h-line" />
      </li>
    </>
  )
}

export default CommentItem

// Thanks for being so typically supportive and such a good friend, Elon. Great to be opening up space for all.
