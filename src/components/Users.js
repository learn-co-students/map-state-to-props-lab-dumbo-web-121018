import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  formatUsers = () => this.props.users.map(user=> <li>{user.username}</li>)

  render() {
    console.log(this.props.users);
    return (
      <div>
        {this.props.users.length}
        <ul>
          {this.formatUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(Users)
