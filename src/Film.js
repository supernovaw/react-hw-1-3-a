import React from 'react';
import './Film.css';

const Star = () => <img className="star" src="/star.svg" alt="star" />;

const Stars = props => {
  if (props.count < 1 || props.count > 5) return null;

  const keys = [...Array(Number(props.count)).keys()];
  return <ul className="Stars">
    {keys.map(k => <li className="card-body-stars u-clearfix" key={k}><Star /></li>)}
  </ul>;
}

export default function Film({ name, year, genre, rating, poster }) {
  return (
    <div className="Film">
      <img className="poster" src={poster} alt="film poster" />
      <div className="card-right">
        <div className="genre">{genre}</div>
        <div className="name">{name} <span className="year">{year}</span></div>
        <Stars count={rating} />
        <div className="details-link">Details...</div>
        <img className="magnet-link" src="/magnet.svg" alt="magnet link" />
      </div>
    </div>
  );
};
