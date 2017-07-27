import React from 'react';
import styles from './chat.css';

export default class StatusBox extends React.Component {
  render() {
    return (
      <div className={styles.chat__messageList__statusBox}>
        {this.props.status} - 
        there {this.props.count > 1 ? 'are' : 'is'} {this.props.count} {this.props.count > 1 ? 'participants' : 'participant'}
      </div>
    );
  }
}
