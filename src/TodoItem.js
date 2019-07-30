import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    return (
      <li>{this.props.content}{/*子组件用this.props接收父组件传递的数据*/}</li>
    )
  }
}

export default TodoItem