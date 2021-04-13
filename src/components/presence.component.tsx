import React from 'react';
import '../stylesheets/components/presence.component.scss'
import { FaYoutube, FaTwitter, FaGithub, FaRegDotCircle } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Grid, Popup } from 'semantic-ui-react';

class PresenceComponent extends React.Component {

  render() {
    const mail =
      <a href={'mailto:mail@a-mo.io'} className={'logo'}>
        <FiMail />
      </a>
      
    const youtube =
      <a href={'https://www.youtube.com/c/AMo_osu'} className={'logo'}>
        <FaYoutube />
      </a>
    
    const twitter =
      <a href={'https://twitter.com/AMoMan_/'} className={'logo'}>
        <FaTwitter />
      </a>

    const github =
      <a href={'https://github.com/TheMoMan'} className={'logo'}>
        <FaGithub />
      </a>

    const osu =
      <a href={'https://osu.ppy.sh/users/2202163'} className={'logo'}>
        <FaRegDotCircle />
      </a>

    return (
      <div className={'presence'}>
        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column>
              <Popup trigger={mail} position={'bottom center'} basic hoverable style={{height: 0}}>{'mail@a-mo.io'}</Popup>
            </Grid.Column>
            <Grid.Column>
              <Popup trigger={youtube} position={'bottom center'} basic hoverable style={{height: 0}}>{'YouTube - A Mo'}</Popup>
            </Grid.Column>
            <Grid.Column>
              <Popup trigger={twitter} position={'bottom center'} basic hoverable style={{height: 0}}>{'Twitter @AMoMan_'}</Popup>
            </Grid.Column>
            <Grid.Column>
              <Popup trigger={github} position={'bottom center'} basic hoverable style={{height: 0}}>{'GitHub - TheMoMan'}</Popup>
            </Grid.Column>
            <Grid.Column>
              <Popup trigger={osu} position={'bottom center'} basic hoverable style={{height: 0}}>{'osu! -Mo-'}</Popup>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  };
}

export default PresenceComponent;
