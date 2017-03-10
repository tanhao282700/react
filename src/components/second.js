import React from 'react';
import ReactDom from 'react-dom';
var $ = require('jquery');


var Detail = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, 我是second!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是second页</div>
            </div>
        );
    }
});

module.exports = Detail;