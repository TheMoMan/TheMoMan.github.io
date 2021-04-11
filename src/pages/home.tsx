import React from 'react';
import { Link } from 'react-router-dom';
import { SocialMediaComponent } from '../components'

class Home extends React.Component {
  render() {
    return (
      <>
        <div>Hello world</div>
        <Link to={'/osu'}>{'>>'}</Link>
        <SocialMediaComponent />
      </>
    );
  };
}

export default Home;
