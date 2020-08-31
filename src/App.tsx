import React from 'react';
import { Switch, Route } from "react-router-dom";

// Pages
import WorkInProgress from './components/pages/WorkInProgress';

function App() {
  return (
    <div className="App">
      {/* Header component */}

      <Switch>
        <Route exact path="/" component={WorkInProgress} />
      </Switch>
    </div>
  );
}

export default App;
