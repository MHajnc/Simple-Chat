import React from 'react';
import styles from './chat.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.chat__heading}>{this.props.title}</div>
    )
  }
}
