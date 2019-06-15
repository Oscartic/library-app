import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Subscribers from './components/subscribers/Subscribers'
import NewSubscriber from './components/subscribers/NewSubscriber'
import EditSubscriber from './components/subscribers/EditSubscriber'
import ShowSubscriber from './components/subscribers/ShowSubscriber'
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/subscribers" component={Subscribers} />
       <Route exact path="/subscribers/new" component={NewSubscriber} />
       <Route exact path="/subscribers/:id" component={ShowSubscriber} />
       <Route exact path="/subscribers/edit/:id" component={EditSubscriber} />
     </Switch>
   </Router>
  );
}

export default App;
