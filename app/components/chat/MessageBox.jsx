import React from 'react';
import styles from './chat.css';

export default class MessageBox extends React.Component {
  render() {
    if (this.props.currentuser == true) {
      return (
        <div className={styles.chat__messageList__userMessage}>
          <div className={styles.chat__messageList__userText}> {this.props.text} </div>
        </div>
      );
    }
    else {
      return (
        <div className={styles.chat__messageList__incomingMessage}>
          <div className={styles.chat__messageList__messageText}> {this.props.text} </div>
        </div>
      );
    }
  }
}
