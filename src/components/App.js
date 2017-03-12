'use strict';


import React from 'react';
import ReactDom from 'react-dom';
import Users from './users/index.js';
import Limit from './users/limit/limit.js';
import { Menu, Icon } from 'antd';

import { Router, Route, hashHistory } from 'react-router';
const SubMenu = Menu.SubMenu;



/*var App = React.createClass({
    render: function() {
        return (
            <div>
                <img src={require('../images/yeoman.png')} />
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/first">first page</a></div>
                <div><a href="#/second">second page</a></div>
            </div>
        );
    }
});

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/first' component={Firsts} />
        <Route path='/second' component={Seconds} />
    </Router>
), document.getElementById('app'));*/

class Sider extends React.Component {
    state = {
        current: '1',
        openKeys: [],
    }
    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
    }
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    getAncestorKeys = (key) => {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                onOpenChange={this.onOpenChange}
                onClick={this.handleClick}
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户列表</span></span>}>
                    <Menu.Item key="1">账号列表</Menu.Item>
                    <Menu.Item key="2">限制列表</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>群运营</span></span>}>
                    <Menu.Item key="3">群列表</Menu.Item>
                    <Menu.Item key="4">群分类</Menu.Item>
                    {/*<SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>*/}
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>说说管理</span></span>}>
                    <Menu.Item key="5">说说列表</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span><Icon type="setting" /><span>日记管理</span></span>}>
                    <Menu.Item key="6">日记列表</Menu.Item>
                    <Menu.Item key="7">日记本管理</Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" title={<span><Icon type="setting" /><span>商品管理</span></span>}>
                    <Menu.Item key="8">商品列表</Menu.Item>
                    <Menu.Item key="9">添加商品</Menu.Item>
                </SubMenu>
                <SubMenu key="sub7" title={<span><Icon type="setting" /><span>机器人管理</span></span>}>
                    <Menu.Item key="10">机器人设置</Menu.Item>
                    <Menu.Item key="11">说说库</Menu.Item>
                    <Menu.Item key="12">评论库</Menu.Item>
                </SubMenu>
                <SubMenu key="sub8" title={<span><Icon type="setting" /><span>举报管理</span></span>}>
                    <Menu.Item key="13">举报列表</Menu.Item>
                </SubMenu>
                <SubMenu key="sub9" title={<span><Icon type="setting" /><span>帮助反馈</span></span>}>
                    <Menu.Item key="14">帮助中心</Menu.Item>
                    <Menu.Item key="15">意见反馈</Menu.Item>
                </SubMenu>
                <SubMenu key="sub10" title={<span><Icon type="setting" /><span>资金管理</span></span>}>
                    <Menu.Item key="16">交易记录</Menu.Item>
                    <Menu.Item key="17">充值记录</Menu.Item>
                    <Menu.Item key="18">提现记录</Menu.Item>
                    <Menu.Item key="19">红包管理</Menu.Item>
                    <Menu.Item key="20">打赏管理</Menu.Item>
                    <Menu.Item key="21">金币管理</Menu.Item>
                </SubMenu>
                <SubMenu key="sub11" title={<span><Icon type="setting" /><span>推荐管理</span></span>}>
                    <Menu.Item key="22">附近榜单</Menu.Item>
                    <Menu.Item key="23">发现推荐</Menu.Item>
                    <Menu.Item key="24">背景推荐</Menu.Item>
                    <Menu.Item key="25">热词管理</Menu.Item>
                    <Menu.Item key="26">banner推荐</Menu.Item>
                </SubMenu>
                <SubMenu key="sub12" title={<span><Icon type="setting" /><span>版本管理</span></span>}>
                    <Menu.Item key="27">版本列表</Menu.Item>
                </SubMenu>
                <SubMenu key="sub13" title={<span><Icon type="setting" /><span>权限管理</span></span>}>
                    <Menu.Item key="28">管理员</Menu.Item>
                    <Menu.Item key="29">功能权限</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

var App = React.createClass({
    render:function(){
        return (
            <div className="app">
                <div className="row app-head">
                    <div className="header-left col-lg-3">
                        <div className="header-left-en col-lg-4">
                            <a href="#">MUOU</a>
                        </div>
                        <div className="header-left-ch col-lg-8">
                            <a href="#">成都陌友科技</a>
                        </div>
                    </div>
                    <div className="header-right col-lg-1 col-lg-offset-1">
                        <div className="avatar col-lg-5">
                            <img src={require('../images/3.jpg')} />
                        </div>
                        <div className="nickName col-lg-7"><a href="#">梅梅</a></div>
                    </div>
                </div>
                {/*<div className="app-nav">
                    <ul>
                        <li>
                            <a>用户管理</a>
                            <ul>
                                <li><a href="#/users/index">账号管理</a></li>
                                <li><a href="#/users/limit/limit">账号列表</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>群运营</a>
                            <ul>
                                <li><a>群列表</a></li>
                                <li><a>群分类</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="view">
                    <Router history={hashHistory}>
                        <Route path='/' component={Users} />
                        <Route path='/users/index' component={Users} />
                        <Route path='/users/limit/limit' component={Limit} />
                    </Router>
                </div>*/}
                <div className="app-contain">
                    <div className="row app-body">
                        <div className="app-nav col-lg-2">
                            <Sider />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
ReactDom.render(
    <App />,
    document.getElementById('app')
);































