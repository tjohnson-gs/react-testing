import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  // This is a controlled component, meaning it's value is determined by state, not be what user is typing in
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a comment</h4>
        <div>
          <textarea
            value={this.state.comment}
            onChange={this.handleChange.bind(this)}
          />
          <div>
            <button action="submit">Submit Comment</button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox);