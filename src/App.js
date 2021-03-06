import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';


const App = () => {
  return (
    // <div>
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/portfolio" exact component={Home} />
          <Route path="/competences" component={Knowledges} />
          <Route path="/projets" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
    // {/* </div> */}
  );
};



export default App;













// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1> 
//     </div>
//   );
// }

// export default App;
