import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // 避免父组件的render执行的时候子组件没变化也重新render（提升性能）
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content!==this.props.content){
      return true
    }else{
      return false
    }
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

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  content: 'hello world'
}

export default TodoItem