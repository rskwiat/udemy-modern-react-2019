import React from 'react';
import { 
  BrowserRouter,
  Route 
} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './header';
const App = () => (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Header />

        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/create" component={StreamCreate} />
        <Route exact path="/streams/edit" component={StreamEdit} />
        <Route exact path="/streams/show" component={StreamShow} />
        <Route exact path="/streams/delete" component={StreamDelete} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
