import React from 'react';
import ReactDom from 'react-dom';
import Headnav from '../../common/nav.js';

/*React创建组件的三种方式:
    函数式定义的无状态组件
    function HelloComponent(props, /!* context *!/) {
        return <div>Hello {props.name}</div>
    }
 为了创建纯展示组件，这种组件只负责根据传入的props来展示，不涉及到要state状态的操作
 1、组件不会被实例化，整体渲染性能得到提升
 2、组件不能访问this对象
 3、组件无法访问生命周期的方法
 4、无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用

    es5原生方式React.createClass定义的组件
        `React.createClass
 创建有状态的组件，这些组件是要被实例化的，并且可以访问组件的生命周期方法
 React.createClass会自绑定函数方法（不像React.Component只绑定需要关心的函数）导致不必要的性能开销，增加代码过时的可能性

    es6形式的extends React.Component定义的组件
    class InputControlES6 extends React.Component
        创建有状态组件
 相对于 React.createClass可以更好实现代码复用


 React.createClass与React.Component区别
 1、函数this自绑定
 React.createClass创建的组件，其每一个成员函数的this都有React自动绑定，任何时候使用，直接使用this.method即可，函数中的this会被正确设置
 React.Component创建的组件，其成员函数不会自动绑定this，需要开发者手动绑定，否则this不能获取当前组件实例对象
 class Contacts extends React.Component {
 constructor(props) {
 super(props);
 }
 handleClick() {
 console.log(this); // 输出为null
 }
 render() {
 return (
 <div onClick={this.handleClick}></div>
 );
 }
 <div onClick={this.handleClick.bind(this)}></div> //使用bind来绑定

2、组件属性类型propTypes及其默认props属性defaultProps配置不同
 React.createClass在创建组件时，有关组件props的属性类型及组件默认的属性会作为组件实例的属性来配置，其中defaultProps是使用getDefaultProps的方法来获取默认组件属性的
 React.Component在创建组件时配置这两个对应信息时，他们是作为组件类的属性，不是组件实例的属性，也就是所谓的类的静态属性来配置的

3、组件初始状态state的配置不同
 React.createClass创建的组件，其状态state是通过getInitialState方法来配置组件相关的状态；
 React.Component创建的组件，其状态state是在constructor中像初始化组件属性一样声明的
 4、Mixins的支持不同
        */

var usersStyle={
    width:"100%",
    height:"100%",
}
var submodule = [
    {
        id:"1",
        contend:"账号管理"
    }
];
class Users extends React.Component{
    render(){
        return(
            <div classID="users" style={usersStyle} >
                <Headnav navleft="用户列表" submodule={submodule} />
            </div>
        );
    }
}

module.exports = Users;