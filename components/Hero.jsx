import React from 'react';
import css from './Hero.scss';

class Hero extends React.Component {
  static propTypes = {
    episodes: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
    product_image_url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className={css.hero}>
        <img src={this.props.product_image_url} className={css.image} />
        <div className={css.episodes}>{this.props.episodes} Episodes</div>
        <div className={css.title}>{this.props.title}</div>
      </div>
    );
  }
}

export {Hero};
