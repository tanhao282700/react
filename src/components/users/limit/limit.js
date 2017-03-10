import React from 'react';
import ReactDom from 'react-dom';
import './limit.scss';

var Limit = React.createClass({
    render: function() {
        return (
            <div className="limit">
                <h5 className="title">hello, 我是second!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是限制列表页</div>
            </div>
        );
    }
});

module.exports = Limit;