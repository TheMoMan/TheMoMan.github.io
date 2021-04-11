import React from 'react';

class SocialMediaComponent extends React.Component {
  render() {
    return (
      <div className={'social-media-component'}>
      <a href={'https://www.youtube.com/c/AMo_osu'}>YouTube</a>
      |
      <a href={'https://twitter.com/AMoMan_/'}>Twitter</a>
      |
      <a href={'https://github.com/TheMoMan'}>GitHub</a>
      |
      <a href={'https://osu.ppy.sh/users/2202163'}>osu!</a>
    </div>
    );
  };
}

export default SocialMediaComponent;