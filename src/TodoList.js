import React, { Component, Fragment } from 'react'
// Fragment 是react提供的占位符
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentDidMount(){
    axios.get('/api/todolist').then((res)=>{
      this.setState(()=>({
        list: [...res.data]
      }))
    }).catch(()=>{
      console.error('error')
    })
  }

  render() {
    return (
      <Fragment>
        {
          //Fragment 是react提供的占位符
        }
        <div>
          {/* 利用label来做光标的聚焦 */}
          <label htmlFor="insertArea">输入内容</label>
          {/* 下面是一个input输入框 */}
          <input 
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <input type="file"/>
          <button
            onClick={this.handleBtnClick}
          >提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item} 
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(()=>({
      inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState((prevState)=>({
      list:[...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    
    this.setState((prevState)=>{
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

export default TodoList