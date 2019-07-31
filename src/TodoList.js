import React, { Component, Fragment } from 'react'
import axios from 'axios'

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

import store from './store'

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange) // store发生变化就会自动执行这个函数
  } 

  render() {
    return (
      <Fragment>
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
          <Input 
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="todo info"
            style={{width:'300px',marginRight:'10px'}}
          />
          <Button
            type="primary"
            onClick={this.handleBtnClick}
          >提交</Button>
          <List
            style={{marginTop:'10px',width:'300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => <List.Item onClick={this.handleItemDelete(index)}>{item}</List.Item>}
          />
        </div>
      </Fragment>
    )
  }

  handleInputChange(e) {
    const action = {
      type:'change_input_value',
      value:e.target.value
    }
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action)
  }
}

export default TodoList