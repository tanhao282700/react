import React from 'react';
import ReactDom from 'react-dom';


//头部导航信息展示组件

/*注意：在React和HTML5中我们设置样式时的书写格式是有区别的
a、HTML5以;结尾
React以,结尾
b、HTML5中key,value都不加引号
React中属于JavaScript对象，key的名字不能出现"-",需要使用驼峰命名法。如果value为
字符串，需要加引号
c、HTML5中，value如果是数字，需要带单位
React中不需要带单位*/


//验证props
/*React.createClass({
    propTypes: {
        // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
        optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,

        // 可以被渲染的对象 numbers, strings, elements 或 array
        optionalNode: React.PropTypes.node,

        //  React 元素
        optionalElement: React.PropTypes.element,

        // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
        optionalMessage: React.PropTypes.instanceOf(Message),

        // 用 enum 来限制 prop 只接受指定的值。
        optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

        // 可以是多个对象类型中的一个
        optionalUnion: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.instanceOf(Message)
        ]),

        // 指定类型组成的数组
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

        // 指定类型的属性构成的对象
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

        // 特定 shape 参数的对象
        optionalObjectWithShape: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number
        }),

        // 任意类型加上 `isRequired` 来使 prop 不可空。
        requiredFunc: React.PropTypes.func.isRequired,

        // 不可空的任意类型
        requiredAny: React.PropTypes.any.isRequired,

        // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
        customProp: function(props, propName, componentName) {
            if (!/matchme/.test(props[propName])) {
                return new Error('Validation failed!');
            }
        }
    },
    /!* ... *!/
});*/


//导航栏模块信息
var leftStyle = {
    height:24,
    position:"relative",
    float:"left",
    paddingLeft:10,
    marginRight:10,
};
var leftPic = {
    width:4,
    height:18,
    position:"absolute",
    left:0,
    top:4,
    background:"#424F63",
    lineHeight:"24px",
}
class Navleft extends React.Component {
    render() {
        return (
            <div className="nav-left" style={leftStyle}>
                <div style={leftPic}></div>
                {this.props.navlefts}
            </div>
        );
    }
}

//导航栏子模块信息
var rightStyle = {
    float:"left",
    paddingLeft:20,
    marginRight:10,
    height:24,
    position:"relative",
}
var rightPic = {
    width:10,
    height:18,
    position:"absolute",
    left:0,
    top:4,
    textAlign:"center",
    lineHeight:"17px",
    color:"#424F63",
    fontWeight:"bold",
}
class Subright extends React.Component{
    render(){
        return (
            <div style={rightStyle}>
                <div style={rightPic}>/</div>
                {this.props.contents}
            </div>
        );
    }
}
var last = {
    float:"left",
}

/*map遍历方法，不要在遍历的时候return元素，保存在一个数组中，return这个数组*/
class Navright extends React.Component{
    render(){
        var linksLists = this.props.submodules.map(function(result){
            return(<Subright key={result.id} contents={result.contend} />);
        });
        return (
            <div style={last}>
                {linksLists}
            </div>
        );
    }
}


//头部导航栏信息
var headNavStyle = {
    width:"100%",
    height:62,
    paddingTop:24,
    borderBottom:"2px solid #e0e0e0",
    float:"left",
    fontSize:"18px",
    color:"#424f63",
}
class Headnav extends React.Component {
    render(){
        return (
            <div className="headNav" style={headNavStyle}>
                <Navleft navlefts={this.props.navleft} />
                <Navright submodules={this.props.submodule} />
            </div>
        );
    }
}

module.exports = Headnav;




















