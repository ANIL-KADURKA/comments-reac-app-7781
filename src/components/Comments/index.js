import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    username: '',
    comment: '',
    count: 0,
    commentsArray: [],
  }

  onChangeName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangeComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  isFavoriteToggle = id => {
    this.setState(prevState => ({
      commentsArray: prevState.commentsArray.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isFavorite: !eachComment.isFavorite}
        }
        return eachComment
      }),
    }))
  }

  isDeleteToggle = id => {
    const {commentsArray} = this.state
    console.log(id)
    const HelloArray = commentsArray.filter(
      eachComment => eachComment.id !== id,
    )
    console.log(HelloArray)
    this.setState({
      commentsArray: [...HelloArray],
    })
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  onClickButton = event => {
    event.preventDefault()
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
    const {username, comment} = this.state
    const newComment = {
      id: uuidv4(),
      username,
      comment,
      isFavorite: false,
    }
    this.setState(prevState => ({
      commentsArray: [...prevState.commentsArray, newComment],
      username: '',
      comment: '',
    }))
  }

  render() {
    const {username, comment, count} = this.state

    const {commentsArray} = this.state

    return (
      <div className="co-app">
        <div className="comments-app">
          <div className="card-container">
            <h1 className="head">Comments</h1>
            <p className="para">Say Something about 4.0 Technologies</p>
            <form className="card-container">
              <input
                type="text"
                className="input-element"
                placeholder="Your Name"
                value={username}
                onChange={this.onChangeName}
              />
              <textarea
                className="text-area"
                placeholder="Your Comment"
                value={comment}
                rows="12"
                cols="25"
                onChange={this.onChangeComment}
              />
            </form>
            <button
              type="submit"
              onClick={this.onClickButton}
              className="button"
            >
              Add Comment
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image-comment"
              alt="comments"
            />
          </div>
        </div>
        <hr className="horizontal" />
        <div className="com-cont">
          <p className="count-co">{count}</p>
          <p className="comment-tag">Comments</p>
        </div>
        <ul>
          {commentsArray.map(eachComment => (
            <CommentItem
              CommentEachItem={eachComment}
              key={eachComment.id}
              backgroundClass={initialContainerBackgroundClassNames}
              isFavoriteToggle={this.isFavoriteToggle}
              isDeleteToggle={this.isDeleteToggle}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
