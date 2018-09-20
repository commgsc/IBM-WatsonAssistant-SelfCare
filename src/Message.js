import React, { Component } from 'react';
import './App.css';
import './Message.css';

var JSONViewer = require('react-json-viewer');

class Message extends Component {

render() {
	if(this.props.summary === 'from-watson-table'){
		return (
		<div className="segments load">
    <div className="from-watson">
      <div className="summary"><img className="dots" width={10} height={10} mode='fit' alt="" src={this.props.dots}/> {this.props.summary}</div>
      <div className="message-inner">
        <JSONViewer json={JSON.parse(this.props.message)}></JSONViewer>
      </div>
      <div className="time">{this.props.time}</div>
    </div>
  </div>
	)
	}
	else{
		return (
		<div className="segments load">
    <div className={`${this.props.type === 'user' ? 'from-user' : 'from-watson'} top`}>
      <div className="summary"><img className="dots" width={10} height={10} mode='fit' alt="" src={this.props.dots}/> {this.props.summary}</div>
      <div className="message-inner">
        <p>{this.props.message}</p>
      </div>
      <div className="time">{this.props.time}</div>
    </div>
  </div>)
	}
}
}

export default Message;

