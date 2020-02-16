import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login/login';
import Admin from './pages/admin/admin';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/index' component={Admin}></Route>
        </Switch>
    </BrowserRouter>
  );
};

// To create a react project, run: npx create-react-app river --typescript
export default App;
