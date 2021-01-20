import "./App.css";

import styled from "styled-components";
import Page from "./components/PageContent/Page";

function App() {
  const BackgroundOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.2;
    position: absolute;
  `;

  return (
    <div className="App">
      <BackgroundOverlay />
      <Page />
    </div>
  );
}

export default App;
