import React from 'react';
import { 
  Router,
  Route,
  Switch
} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './header';

import history from '../history';

const App = () => (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/:id" component={StreamShow} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete/:id" component={StreamDelete} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
