import React from 'react';
import { Link } from 'react-router-dom';

class Osu extends React.Component {
  render() {
    return (
      <>
        <div>Hello osu!</div>
        <Link to={'/'}>{'<<'}</Link>
      </>
    );
  };
}

export default Osu;
