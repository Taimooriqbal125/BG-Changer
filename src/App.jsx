import { useState } from "react";
import Bgchanger from "./Bgchanger/Bgchanger";

function App() {
  const [red, setRed] = useState({
    background: "grey",
  });
  const redcolor = () => {
    setRed({ background: "red" });
  };
  const pinkcolor = () => {
    setRed({ background: "pink" });
  };
  const blackcolor = () => {
    setRed({ background: "black" });
  };
  const whitecolor = () => {
    setRed({ background: "white" });
  };
  const yellowcolor = () => {
    setRed({ background: "yellow" });
  };
  const orangecolor = () => {
    setRed({ background: "orange" });
  };

  return (
    <div
      style={{
        background: red.background,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={redcolor}
          style={{
            width: 100,
            height: 30,
            borderRadius: 50,
            background: "red",
            border: 0,
          }}
        >
          Red
        </button>
        <button
          onClick={pinkcolor}
          style={{
            width: 100,
            height: 30,
            borderRadius: 50,
            background: "pink",
            border: 0,
          }}
        >
          Red
        </button>
        <button
          onClick={blackcolor}
          style={{
            width: 100,
            height: 30,
            borderRadius: 50,
            background: "black",
            border: 0,
          }}
        >
          Red
        </button>
        <button
          onClick={orangecolor}
          style={{
            width: 100,
            height: 30,
            borderRadius: 50,
            background: "orange",
            border: 0,
          }}
        >
          Red
        </button>
        <button
          onClick={yellowcolor}
          style={{
            width: 100,
            height: 30,
            borderRadius: 50,
            background: "yellow",
            border: 0,
          }}
        >
          Red
        </button>
        <button
          onClick={whitecolor}
          style={{
            width: 100,
            height: 30,
            borderRadius: 50,
            background: "white",
            border: 0,
          }}
        >
          Red
        </button>
      </div>
    </div>
  );
}

export default App;
