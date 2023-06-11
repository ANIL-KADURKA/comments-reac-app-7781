// Write your code here
import './index.css'

const CommentItem = props => {
  const {
    CommentEachItem,
    backgroundClass,
    isFavoriteToggle,
    isDeleteToggle,
  } = props
  const {id, username, comment, isFavorite} = CommentEachItem
  const surname = username.charAt(0).toUpperCase()
  const randomNumber = Math.ceil(Math.random() * 7)
  const surnameClass = backgroundClass[randomNumber]

  const onClickImage = () => {
    console.log(id)
    isFavoriteToggle(id)
  }

  const onClickDelete = () => {
    console.log(id)
    isDeleteToggle(id)
  }
  const highlight = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-container">
      <div className="name-cont">
        <p className={`surname ${surnameClass}`}>{surname}</p>
        <p className="username-element">{username}</p>
        <p className="timer">less than a minute ago</p>
      </div>
      <p className="comment-element">{comment}</p>
      <div className="button-op">
        <button type="button" className="butter-button" onClick={onClickImage}>
          <img src={highlight} className="image-icon" alt="like" />
        </button>
        <button
          type="button"
          className="butter-button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="image-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
