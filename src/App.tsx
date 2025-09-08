import { useState } from "react";
import "./App.css";
import { FasPolicy, LibPolicy } from "./components/policy/policy";
import { DrawProbability } from "./components/drawProbability/drawProbability";

function App() {
  const [numberOfFascists, setNumberOfFascists] = useState(11);
  const [numberOfLiberals, setNumberOfLiberals] = useState(6);

  return (
    <div className="root">
      <h1 style={{ textAlign: "center", fontStyle: "italic" }}>Trust Nobody</h1>
      <div className="count">
        <div className="policyCount">
          <LibPolicy />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <button
              className="countBtn countLibBtn"
              onClick={() => setNumberOfLiberals((prev) => prev - 1)}
            >
              -
            </button>
            <span>{numberOfLiberals}</span>
            <button
              className="countBtn countLibBtn"
              onClick={() => setNumberOfLiberals((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="policyCount">
          <FasPolicy />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <button
              className="countBtn countFasBtn"
              onClick={() => setNumberOfFascists((prev) => prev - 1)}
            >
              -
            </button>
            <span>{numberOfFascists}</span>
            <button
              className="countBtn countFasBtn"
              onClick={() => setNumberOfFascists((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <DrawProbability
          lib={3}
          fas={0}
          totalFas={numberOfFascists}
          totalLib={numberOfLiberals}
        />
        <DrawProbability
          fas={3}
          lib={0}
          totalFas={numberOfFascists}
          totalLib={numberOfLiberals}
        />
        <DrawProbability
          lib={2}
          fas={1}
          totalFas={numberOfFascists}
          totalLib={numberOfLiberals}
        />
        <DrawProbability
          fas={2}
          lib={1}
          totalFas={numberOfFascists}
          totalLib={numberOfLiberals}
        />
      </div>
    </div>
  );
}

export default App;
