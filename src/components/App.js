'use strict';


import React from 'react';
import ReactDom from 'react-dom';
import Users from './users/index.js';
import Limit from './users/limit/limit.js';

import { Router, Route, hashHistory } from 'react-router';



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


var App = React.createClass({
    render:function(){
        return (
            <div className="app">
                <div className="app-head">

                </div>
                <div className="app-nav">
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
                </div>
            </div>
        );
    }
});
ReactDom.render(
    <App />,
    document.getElementById('app')
);































