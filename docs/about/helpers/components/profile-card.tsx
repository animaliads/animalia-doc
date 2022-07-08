import React from 'react';
import styles from './profile-card.module.css';

export default class ProfileCardComponent extends React.Component {
  props: {
    avatar: string;
    name: string;
    title: string;
  };

  render(): JSX.Element {
    return (
      <div className={styles.cardProfile}>
        <div className={styles.imgProfile}>
          <img src={this.props.avatar} alt={this.props.name} />
        </div>
        <strong>{this.props.name}</strong>
        <span>{this.props.title}</span>
      </div>
    );
  }
}
