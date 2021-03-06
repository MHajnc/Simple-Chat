import React from 'react';
import MessageBox from './MessageBox.jsx';
import StatusBox from './StatusBox.jsx';
import styles from './chat.css';

export default class MessageList extends React.Component {
  render() {
    const listItems = this.props.messagelist.map((message, i) => 
          {
            if (message.type == 'message') return (
              <MessageBox key={i} text={message.text} currentuser={message.currentuser} />
            );
            else return (
              <StatusBox key={i} status={message.status} count={message.count} />
            );
          }
      );
    return (
      <div id="messageList" className={styles.chat__messageList}>
        {listItems}
      </div>
    );
  }
}
