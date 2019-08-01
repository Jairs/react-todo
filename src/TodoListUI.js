import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

// 无状态组件
// 当一个普通组件只有render函数的时候，可以用无状态组件替换掉原组件
// 优势：性能比较高（不需要执行生命函数）
const TodoListUI = (props) => {
  return (
    <div style={{marginTop:'10px',marginLeft:'10px'}}>
      <Input 
        id="insertArea"
        className='input'
        value={props.inputValue}
        onChange={props.handleInputChange}
        placeholder="todo info"
        style={{width:'300px',marginRight:'10px'}}
      />
      <Button
        type="primary"
        onClick={props.handleBtnClick}
      >提交</Button>
      <List
        style={{marginTop:'10px',width:'300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => <List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>}
      />
    </div>
  )
}

export default TodoListUI 