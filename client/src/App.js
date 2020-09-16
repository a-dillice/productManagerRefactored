import React from 'react';
import {Router} from '@reach/router';
import Create from './views/Create';
import Show from './views/Show'
import Update from './views/Update'

// App 
function App() {
  return (
    <div className="App">
      
      <Router>
        <Create path="/"/>
        <Update path="/:id/edit"/>
        <Show path="/:id"/>
      </Router>

    </div>
  );
}

export default App;
