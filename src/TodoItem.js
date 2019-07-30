import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content } = this.props
    return (
      <li
          onClick={this.handleClick}
      >
        {/*子组件用this.props接收父组件传递的数据*/}
        {content}
      </li>
    )
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

export default TodoItem