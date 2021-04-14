import React from 'react';
import '../stylesheets/components/footer.component.scss'

class FooterComponent extends React.Component {
  render() {
    return (
      <footer>
        <a href={'mailto:mail@a-mo.io'}>{'mail@a-mo.io'}</a>
      </footer>
    );
  }
}

export default FooterComponent;
