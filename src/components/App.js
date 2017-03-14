'use strict';


import React from 'react';
import ReactDom from 'react-dom';
import Users from './users/index.js';
import Limit from './users/limit/limit.js';
import { Menu, Icon } from 'antd';

import { Router, Route, hashHistory } from 'react-router';
const SubMenu = Menu.SubMenu;



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
                    <Menu.Item key="1"><a href="#/users/index">账号管理</a></Menu.Item>
                    <Menu.Item key="2"><a href="#/users/limit/limit">限制列表</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>群运营</span></span>}>
                    <Menu.Item key="3"><a href="#/circle/circleList">群列表</a></Menu.Item>
                    <Menu.Item key="4"><a href="#">群分类</a></Menu.Item>
                    {/*<SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>*/}
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>说说管理</span></span>}>
                    <Menu.Item key="5"><a href="#/dynamic/index">说说列表</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span><Icon type="setting" /><span>日记管理</span></span>}>
                    <Menu.Item key="6"><a href="#/dairy/dairyList">日记列表</a></Menu.Item>
                    <Menu.Item key="7"><a href="#">日记本管理</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" title={<span><Icon type="setting" /><span>商品管理</span></span>}>
                    <Menu.Item key="8"><a href="#/product/productList">商品列表</a></Menu.Item>
                    <Menu.Item key="9"><a href="#/product/addProduct">添加商品</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub7" title={<span><Icon type="setting" /><span>机器人管理</span></span>}>
                    <Menu.Item key="10"><a href="#/robot/setting">机器人设置</a></Menu.Item>
                    <Menu.Item key="11"><a href="#/robot/dynamicLibrary">说说库</a></Menu.Item>
                    <Menu.Item key="12"><a href="#/robot/comments">评论库</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub8" title={<span><Icon type="setting" /><span>举报管理</span></span>}>
                    <Menu.Item key="13"><a href="#/report/index">举报列表</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub9" title={<span><Icon type="setting" /><span>帮助反馈</span></span>}>
                    <Menu.Item key="14"><a href="#/feedback/help">帮助中心</a></Menu.Item>
                    <Menu.Item key="15"><a href="#/feedback/feedback">意见反馈</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub10" title={<span><Icon type="setting" /><span>资金管理</span></span>}>
                    <Menu.Item key="16"><a href="#">交易记录</a></Menu.Item>
                    <Menu.Item key="17"><a href="#">充值记录</a></Menu.Item>
                    <Menu.Item key="18"><a href="#">提现记录</a></Menu.Item>
                    <Menu.Item key="19"><a href="#">红包管理</a></Menu.Item>
                    <Menu.Item key="20"><a href="#">打赏管理</a></Menu.Item>
                    <Menu.Item key="21"><a href="#">金币管理</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub11" title={<span><Icon type="setting" /><span>推荐管理</span></span>}>
                    <Menu.Item key="22"><a href="#">附近榜单</a></Menu.Item>
                    <Menu.Item key="23"><a href="#">发现推荐</a></Menu.Item>
                    <Menu.Item key="24"><a href="#">背景推荐</a></Menu.Item>
                    <Menu.Item key="25"><a href="#">热词管理</a></Menu.Item>
                    <Menu.Item key="26"><a href="#">banner推荐</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub12" title={<span><Icon type="setting" /><span>版本管理</span></span>}>
                    <Menu.Item key="27"><a href="#">版本列表</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub13" title={<span><Icon type="setting" /><span>权限管理</span></span>}>
                    <Menu.Item key="28"><a href="#">管理员</a></Menu.Item>
                    <Menu.Item key="29"><a href="#">功能权限</a></Menu.Item>
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
                            <a href="#">react项目实例</a>
                        </div>
                    </div>
                    <div className="header-right col-lg-1 col-lg-offset-1">
                        <div className="avatar col-lg-5">
                            <img src={require('../images/3.jpg')} />
                        </div>
                        <div className="nickName col-lg-7"><a href="#">梅梅</a></div>
                    </div>
                </div>
                <div className="app-contain">
                    <div className="row app-body">
                        <div className="app-nav col-lg-2">
                            <Sider />
                        </div>
                        <div className="col-lg-10 app-view" classID="view">
                            <Router history={hashHistory}>
                                <Route path='/' component={Users} />
                                <Route path='/users/index' component={Users} />
                                <Route path='/users/limit/limit' component={Limit} />
                                <Route path='/circle/circleList' component={Limit} />
                                <Route path='/dynamic/index' component={Limit} />
                                <Route path='/dairy/dairyList' component={Limit} />
                                <Route path='/product/productList' component={Limit} />
                                <Route path='/product/addProduct' component={Limit} />
                                <Route path='/robot/setting' component={Limit} />
                                <Route path='/robot/dynamicLibrary' component={Limit} />
                                <Route path='/robot/comments' component={Limit} />
                            </Router>
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































