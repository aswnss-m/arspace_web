import "@google/model-viewer";
import "./EditBar.css";
const Model = () => (
  <div id="modelCard">
    <model-viewer
      src="/Astronaut.glb"
      className="modelStyle"
      ios-src=""
      poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
      ar-modes="webxr scene-viewer quick-look"
    ></model-viewer>
  </div>
);

export default Model;
