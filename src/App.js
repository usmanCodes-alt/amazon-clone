import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StateProvider from "./StateProvider";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    // wrap the whole app in router
    <StateProvider>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              {/** Default (home) page at the bottom */}
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
