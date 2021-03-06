import React, {Component} from 'react';

import Header from './Header.jsx';
import MessageList from './MessageList.jsx';
import SendMessagForm from './SendMessagForm.jsx';

import styles from './chat.css';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io();
    this.state = {messages: [], userid: 0, users: 0};
    this.userAccept = this.userAccept.bind(this);
    this.userJoin = this.userJoin.bind(this);
    this.userLeft = this.userLeft.bind(this);
    this.messageReceive = this.messageReceive.bind(this);
    this.messageSend = this.messageSend.bind(this);
    this.messageList = document.getElementById('messageList');
  }

  componentDidMount() {
    this.socket.emit('user:request');
    this.socket.on('user:accept', this.userAccept);
    this.socket.on('user:join', this.userJoin);
    this.socket.on('user:left', this.userLeft);
    this.socket.on('send:message', this.messageReceive);
  }

  componentWillUnmount() {
    this.socket.emit('user:left');
  }

  userAccept(msg) {
    this.setState({userid: msg.id});
    this.setState({users: msg.users});
    this.state.messages.push({
      'type': 'status',
      'status': 'you joined',
      'count': msg.users
    });
    this.setState({messages: this.state.messages});
  }

  userJoin() {
    this.setState((prevState, props) => ({users: prevState.users + 1}));
    this.state.messages.push({
      'type': 'status',
      'status': 'someone joined',
      'count': this.state.users
    });
    this.setState({messages : this.state.messages});
  }

  userLeft() {
    this.setState((prevState, props) => ({users: prevState.users - 1}));
    this.state.messages.push({
      'type': 'status',
      'status': 'someone left',
      'count': this.state.users
    });
    this.setState( {messages: this.state.messages} );
  }

  messageReceive(msg) {
    msg.currentuser = msg.user == this.state.userid;
    this.state.messages.push(msg);
    this.setState({messages: this.state.messages});
    messageList.scrollTop = messageList.scrollHeight;
  }

  messageSend(msg) {
    msg.currentuser = true;
    msg.user = this.state.userid;
    this.socket.emit('send:message', msg);
  }

  render() {
    return (
      <div className={styles.chat}>
        <Header title="Simple chat" />
        <MessageList messagelist={this.state.messages} />
        <SendMessagForm onMessageSubmit={this.messageSend} />
      </div>
    );
  }
}
