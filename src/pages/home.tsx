import React from 'react';
import '../stylesheets/pages/home.scss';
import { HomeBannerComponent, PresenceComponent } from '../components'

class Home extends React.Component {
  render() {
    return (
      <div className={'home-page'}>
        <HomeBannerComponent />
        <PresenceComponent />
      </div>
    );
  };
}

export default Home;
