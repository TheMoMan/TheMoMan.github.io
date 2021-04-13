import React from 'react';
import '../stylesheets/components/home-banner.component.scss'
import { Grid, GridColumn } from 'semantic-ui-react';

class HomeBannerComponent extends React.Component {
  render() {
    return (
      <div className={'home-banner'}>
        <div className={'grid-container'}>
          <Grid>
            <Grid.Row columns={2} className={'top'}>
              <Grid.Column>
                <div className={'text name'}>
                  {'A Mo'}
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={'text title'}>
                  {'Software Engineer'}
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} className={'bottom'}>
              <Grid.Column></Grid.Column>
              <Grid.Column>
                <div className={'text blurb'}>
                  {'I studied physics, computer science, and circle clicking.'}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default HomeBannerComponent;
