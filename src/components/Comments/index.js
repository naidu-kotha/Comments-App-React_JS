import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {reviewsList: [], name: '', reviewText: '', count: 0}

  toggleLikeBtn = id => {
    this.setState(prevState => ({
      reviewsList: prevState.reviewsList.map(eachReview => {
        if (id === eachReview.id) {
          return {...eachReview, isLiked: !eachReview.isLiked}
        }
        return eachReview
      }),
    }))
  }

  deleteReview = id => {
    this.setState(prevState => ({
      reviewsList: prevState.reviewsList.filter(
        eachReview => eachReview.id !== id,
      ),
    }))
  }

  submitComment = event => {
    event.preventDefault()
    const {name, reviewText} = this.state
    const initialBackgroundColorClassName = `profile-pic ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newReview = {
      id: uuidv4(),
      name,
      reviewText,
      isLiked: false,
      date: new Date(),
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      reviewsList: [...prevState.reviewsList, newReview],
      name: '',
      reviewText: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeReviewText = event => {
    this.setState({reviewText: event.target.value})
  }

  render() {
    const {reviewsList, name, reviewText} = this.state
    let {count} = this.state
    count = reviewsList.length
    return (
      <div className="bg">
        <h1 className="heading">Comments</h1>
        <div className="top-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
          <form className="comments-container" onSubmit={this.submitComment}>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              type="text"
              className="text"
              placeholder="Your Name"
              value={name}
              onChange={this.onChangeName}
            />
            <textarea
              type="text"
              className="text comment-box"
              placeholder="Your
              Comment"
              value={reviewText}
              onChange={this.onChangeReviewText}
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
        </div>

        <ul className="comments">
          <div>
            <p className="total-comments">
              <span className="comments-count">{count}</span>Comments
            </p>
            {reviewsList.map(eachReview => (
              <CommentItem
                key={eachReview.id}
                reviewDetails={eachReview}
                toggleLikeBtn={this.toggleLikeBtn}
                deleteReview={this.deleteReview}
              />
            ))}
          </div>
        </ul>
      </div>
    )
  }
}

export default Comments
