import React from 'react';
import {Link} from 'react-router-dom';
import css from './Selector.scss';
import classNames from 'classnames';

class Selector extends React.Component {
  static propTypes = {
    ids: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    selectedId: React.PropTypes.number.isRequired,
  }

  renderButtons() {
    return this.props.ids.map(id => {
      const classes = classNames({
        [css.link]: true,
        [css.selected]: this.props.selectedId === id,
      });
      return (
        <Link className={classes} to={`/?id=${id}`} key={id} >
          <span className={css.box}></span>
          <span className={css.id}>{id}</span>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className={css.selectorWrapper}>
        <div className={css.selector}>
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

export {Selector};
