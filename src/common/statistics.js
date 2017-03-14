import React from 'react';
import ReactDom from 'react-dom';


var staticStyle = {
    background:"pink",
    height:"100%",
}
class Static extends React.Component{
    render(){
        return (
            <div className="col-lg-3" style={staticStyle}>

            </div>
        );
    }
}

module.exports = Static;



















































