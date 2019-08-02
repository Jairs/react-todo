import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitListAction } from './store/actionCreators'

// // TodoList是UI组件，也是无状态组件
// const TodoList = (props) => {

//   const { inputValue, list, changeInputValue, handleClick, handleDelete } = props
    
//   return (
//     <div>
//       <div>
//         <input value={inputValue} onChange={changeInputValue}/>
//         <button onClick={handleClick}>提交</button>
//       </div>
//       <ul>
//         {
//           list.map((item,index) => {
//             return <li key={index} onClick={()=>{handleDelete(index)}}>{item}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

class TodoList extends Component {
  
  render() {

    const { inputValue, list, changeInputValue, handleClick, handleDelete } = this.props
    
    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue}/>
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item,index) => {
              return <li key={index} onClick={()=>{handleDelete(index)}}>{item}</li>
            })
          }
        </ul>
      </div>
    )

  }

  componentDidMount() {
    
    this.props.handleInitList()

  }

}

// mapStateToProps 是将store的数据映射到组件的props中
const mapStateToProps = (state) => { // state是指store里面的数据
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// 把store.dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => {
  return {

    handleInitList() {
      const action = getInitListAction()
      dispatch(action)
    },

    changeInputValue(e) {
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },

    handleClick() {
      const action = getAddItemAction()
      dispatch(action)
    },

    handleDelete(index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    }
  }
}

// mapStateToProps是数据
// mapDispatchToProps是逻辑
// 如果TodoList是UI组件
// connect对UI组件进行包装将这三个结合起来就是一个容器组件，所以导出的是容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)