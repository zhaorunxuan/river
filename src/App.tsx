import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login/login'

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/admin' component={Login}></Route>
        </Switch>
    </BrowserRouter>
  );
};

// To create a react project, run: npx create-react-app river --typescript
export default App;
