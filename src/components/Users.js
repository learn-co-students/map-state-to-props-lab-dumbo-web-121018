import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const userList = this.props.users.map((user, index) => { return <li key={index}>{user.username} </li> })
    return (
      <div>
        <ul>
          Users!
          {userList}
          <p>Length: {this.props.count}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
  count: state.users.length }
}

export default connect(mapStateToProps)(Users);
