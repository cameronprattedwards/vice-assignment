import _ from 'lodash';
import React from 'react';
import css from './Root.scss';
import {Hero} from './Hero';
import {Selector} from './Selector';
import shows from '../shows.json';
import qs from 'qs';

const indexedShows = _.keyBy(shows, 'id');
const ids = shows.map(show => show.id);

class Root extends React.Component {
  render() {
    const query = qs.parse(this.props.location.search.slice(1));
    const selectedId = parseInt(query.id || 1);
    const selectedShow = indexedShows[selectedId];

    return (
      <div className={css.root}>
        <Selector ids={ids} selectedId={selectedId} />
        <Hero {...selectedShow} />
      </div>
    );
  }
}

export {Root};
