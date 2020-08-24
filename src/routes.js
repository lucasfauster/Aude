import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing/index';
import Fotos from './pages/Fotos/index';
import Bio from './pages/Bio/index';
import Videos from './pages/Videos/index';

function Routes(){
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/fotos" component={Fotos} />
      <Route path="/bio" component={Bio} />
      <Route path="/videos" component={Videos} />
    </BrowserRouter>
  );
}
export default Routes;