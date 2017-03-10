import React from 'react';
import ReactDom from 'react-dom';
var $ = require('jquery');


var List = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, 我是first!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是first页</div>
            </div>
        );
    }
});

module.exports = List;