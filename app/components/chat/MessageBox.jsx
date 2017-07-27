import React from 'react';
import styles from '../../App.css';

export default class MessageBox extends React.Component {
  render() {
    if (this.props.currentuser == true) {
      return (
        <div className={styles.userMessage}>
          <div className={styles.userText}> {this.props.text} </div>
        </div>
      );
    }
    else {
      return (
        <div className={styles.incomingMessage}>
          <div className={styles.messageText}> {this.props.text} </div>
        </div>
      );
    }
  }
}
