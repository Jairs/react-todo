import React from 'react'; // 编译jsx语法
import ReactDOM from 'react-dom'; // 将组件挂载到dom节点上
import App from './App'; // 引入组件
// JSX语法中，如果我们要使用自己创建的组件，组件开头必须以大写字母开头
ReactDOM.render( < App / > , document.getElementById('root'));