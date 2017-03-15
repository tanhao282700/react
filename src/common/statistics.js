import React from 'react';
import ReactDom from 'react-dom';



/*

生命周期共提供了10个不同的API。

1.getDefaultProps

作用于组件类，只调用一次，返回对象用于设置默认的props，对于引用值，会在实例中共享。

2.getInitialState

作用于组件的实例，在实例创建时调用一次，用于初始化每个实例的state，此时可以访问this.props。

3.componentWillMount

在完成首次渲染之前调用，此时仍可以修改组件的state。

4.render

必选的方法，创建虚拟DOM，该方法具有特殊的规则：

只能通过this.props和this.state访问数据
可以返回null、false或任何React组件
只能出现一个顶级组件（不能返回数组）
不能改变组件的状态
不能修改DOM的输出
5.componentDidMount

真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()访问到真实的DOM元素。此时已可以使用其他类库来操作这个DOM。

在服务端中，该方法不会被调用。

6.componentWillReceiveProps

组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。

componentWillReceiveProps: function(nextProps) {
    if (nextProps.bool) {
        this.setState({
            bool: true
        });
    }
}
7.shouldComponentUpdate

组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。

在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用

8.componentWillUpdate

接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。

9.componentDidUpdate

完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。

10.componentWillUnmount

组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。
*/

var staticStyle = {
    height:"100%",
    padding:0,
}
var subStyle = {
    background:"#4778c7",
    height:105,
    marginTop:"17px",
    padding:0,
    marginLeft:"4%",
    borderRadius:"4px",
}
var contenStyle = {
    height:"100%",
}
var small1Style = {
    width:"100%",
    height:"50%",
    lineHeight:"60px",
    textAlign:"center",
    fontSize:"34px",
    color:"#fff",
    textIndent:"-12px",
}
var imgStyle = {
    height:"100%",
    textAlign:"right",
    lineHeight:"88px",
    paddingRight:"35px",
}
var small2Style = {
    width:"100%",
    height:"50%",
    lineHeight:"52.5px",
    textAlign:"center",
    fontSize:"18px",
    color:"#fff",
}
class Static extends React.Component{
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            type: props.statics.type,
            color:props.statics.color,
            pic:props.statics.pic,
        };

        // ES6 类中函数必须手动绑定
        /*this.handleChange = this.handleChange.bind(this);*/
    }
    /*handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }*/
    render(){
        return (
            <div className="col-lg-3" style={staticStyle}>
                <div className="col-lg-11" style={subStyle}>
                    <div className="col-lg-6" style={contenStyle}>
                        <div style={small1Style}>0</div>
                        <div style={small2Style}>{this.props.statics.type}</div>
                    </div>
                    <div className="col-lg-6" style={imgStyle}>
                        <img src={require("../images/newuser.png")} style={{display:"inlineBlock",verticalAlign:"middle"}} />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Static;



















































