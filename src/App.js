import "./App.css";
import { Route } from "react-router-dom";
import Page from "./components/PageContent/Page";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Page />
      </Route>
    </div>
  );
}

export default App;
