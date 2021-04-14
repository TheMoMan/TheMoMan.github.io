import React from 'react';
import '../stylesheets/components/presence.component.scss'
import { FaYoutube, FaTwitter, FaGithub, FaRegDotCircle } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Grid } from 'semantic-ui-react';

interface PresenceIconComponentProps {
  icon: JSX.Element;
  url: string;
  label: string;
}

interface PresenceIconComponentState {
  hovered: boolean;
}

class PresenceIconComponent extends React.Component<PresenceIconComponentProps, PresenceIconComponentState> {
  constructor(props: PresenceIconComponentProps) {
    super(props);

    this.state = {
      hovered: false,
    }
  }

  private onMouseOver = () => {
    this.setState({
      hovered: true,
    });
  }

  private onMouseOut = () => {
    this.setState({
      hovered: false,
    });
  }

  render() {
    return (
      <a href={this.props.url} className={'hoverable'} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        {this.props.icon}
        <div className={'label'} style={{ display: this.state.hovered ? 'block' : 'none'}}>
          {this.props.label}
        </div>
      </a>
    );
  }
}

class PresenceComponent extends React.Component {
  render() {
    return (
      <div className={'presence'}>
        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column>
              <PresenceIconComponent
                icon={<FiMail />}
                url={'mailto:mail@a-mo.io'}
                label={'mail@a-mo.io'}
              />
            </Grid.Column>
            <Grid.Column>
            <PresenceIconComponent
                icon={<FaYoutube />}
                url={'https://www.youtube.com/c/AMo_osu'}
                label={'YouTube - A Mo'}
              />
            </Grid.Column>
            <Grid.Column>
              <PresenceIconComponent
                icon={<FaTwitter />}
                url={'https://twitter.com/AMoMan_/'}
                label={'Twitter @AMoMan_'}
              />
            </Grid.Column>
            <Grid.Column>
              <PresenceIconComponent
                icon={<FaGithub />}
                url={'https://github.com/TheMoMan'}
                label={'GitHub - TheMoMan'}
              />
            </Grid.Column>
            <Grid.Column>
              <PresenceIconComponent
                icon={<FaRegDotCircle />}
                url={'https://osu.ppy.sh/users/2202163'}
                label={'osu! -Mo-'}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default PresenceComponent;
