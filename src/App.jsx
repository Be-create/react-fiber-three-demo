import CanvasComponent from "./Components/ComputerCanvas";

import { ComputerModel } from "./Components/ComputerModel";

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "90vh" }}>
      <CanvasComponent>
        <ComputerModel />
      </CanvasComponent>
    </div>
  );
}

export default App;
