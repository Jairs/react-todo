import React, { Component, Fragment } from 'react'
// Fragment 是react提供的占位符

import './style.css'

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
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
            onChange={this.handleInputChange.bind(this)}
          />
          <button
            onClick={this.handleBtnClick.bind(this)}
          >提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li 
                        key={index}
                        onClick={this.handleItemDelete.bind(this,index)}
                        // 不转义，直接用html输出
                        dangerouslySetInnerHTML={{__html: item}}
                      >
                      </li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    const list = [...this.state.list]
    list.splice(index, 1)

    this.setState({
      list
    })
  }
}

export default TodoList