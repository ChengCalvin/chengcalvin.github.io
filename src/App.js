import "./App.css";
import { Route } from "react-router-dom";
import Page from "./components/PageContent/Page";

function App() {
  return (
    <>
      <Route exact path="/">
        <div className="App">
          <Page />
        </div>
      </Route>
    </>
  );
}

export default App;
