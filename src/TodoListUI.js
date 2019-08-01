import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

class TodoListUI extends Component {
  render () {
    return (
      <div style={{marginTop:'10px',marginLeft:'10px'}}>
        <Input 
          id="insertArea"
          className='input'
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
          placeholder="todo info"
          style={{width:'300px',marginRight:'10px'}}
        />
        <Button
          type="primary"
          onClick={this.props.handleBtnClick}
        >提交</Button>
        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => <List.Item onClick={()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoListUI 