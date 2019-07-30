import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <li
          onClick={this.handleClick}
      >
        {/*子组件用this.props接收父组件传递的数据*/}
        {this.props.content}
      </li>
    )
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

export default TodoItem