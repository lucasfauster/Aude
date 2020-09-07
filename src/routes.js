import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing/index";
import Albums from "./pages/Albums/index";
import Bio from "./pages/Bio/index";
import Videos from "./pages/Videos/index";
import VideosDet from "./pages/VideosDet/index";
import Fotos from "./pages/Fotos/index";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/albums" component={Albums} />
      <Route path="/bio" component={Bio} />
      <Route path="/videos" exact component={Videos} />
      <Route path="/fotos/:albums_id" component={Fotos} />
      <Route path="/videos/:id" component={VideosDet} />
    </BrowserRouter>
  );
}
export default Routes;
