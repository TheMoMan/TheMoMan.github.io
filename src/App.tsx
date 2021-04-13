import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Osu } from './pages';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/osu' component={Osu} />
          </Switch>
        </Router>
      </>
    );
  };
}

export default App;
