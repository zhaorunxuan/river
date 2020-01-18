import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Admin from './pages/admin/admin'

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/admin' component={Admin}></Route>
        </Switch>
    </BrowserRouter>
  );
};

// To create a react project, run: npx create-react-app river --typescript
export default App;
