import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/sardines" element={<Sardines />} />
      </Routes>
    </Router>
  );
}

export default App;



// import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import VendingMachine from "./VendingMachine";
// import Sardines from "./Sardines";
// import Chips from "./Chips";
// import Soda from "./Soda";

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/" exact render={() => <VendingMachine />} />
//           <Route path="/soda" exact render={() => <Soda />} />
//           <Route path="/chips" exact render={() => <Chips />} />
//           <Route path="/sardines" exact render={() => <Sardines />} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
