import { useState } from "react";
import "./App.css";
import { FasPolicy, LibPolicy } from "./components/policy/policy";
import { DrawProbability } from "./components/drawProbability/drawProbability";
import skull from "./assets/icons8-skull-100.png";
import dove from "./assets/icons8-dove-100.png";

function App() {
  const [numberOfFascists, setNumberOfFascists] = useState(11);
  const [numberOfLiberals, setNumberOfLiberals] = useState(6);

  return (
    <div className="root">
      <h1
        style={{
          textAlign: "center",
          fontStyle: "italic",
          color: "whitesmoke",
        }}
      >
        Trust Nobody
      </h1>
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
              onClick={() => {
                if (0 < numberOfLiberals) {
                  setNumberOfLiberals((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
            <span>{numberOfLiberals}</span>
            <button
              className="countBtn countLibBtn"
              onClick={() => {
                if (numberOfLiberals < 6) {
                  setNumberOfLiberals((prev) => prev + 1);
                }
              }}
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
              onClick={() => {
                if (0 < numberOfFascists) {
                  setNumberOfFascists((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
            <span>{numberOfFascists}</span>
            <button
              className="countBtn countFasBtn"
              onClick={() => {
                if (numberOfFascists < 11) {
                  setNumberOfFascists((prev) => prev + 1);
                }
              }}
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
      <div className="onePolicyContainer">
        <div style={{ position: "relative" }}>
          <svg
            width="150"
            height="150"
            viewBox="-18.75 -18.75 187.5 187.5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              r="65"
              cx="75"
              cy="75"
              fill="transparent"
              stroke="rgba(1, 138, 198, 0.5)"
              strokeWidth="10"
            ></circle>
            <circle
              r="65"
              cx="75"
              cy="75"
              stroke="#338ac6"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDashoffset={`${
                408.2 -
                (numberOfLiberals / (numberOfFascists + numberOfLiberals)) *
                  408.2
              }px`}
              fill="transparent"
              strokeDasharray="408.2px"
            ></circle>
          </svg>
          <span
            style={{
              color: "#338ac6",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            {(
              (numberOfLiberals / (numberOfFascists + numberOfLiberals)) *
              100
            ).toFixed(0)}
            %
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <svg
            width="150"
            height="150"
            viewBox="-18.75 -18.75 187.5 187.5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              r="65"
              cx="75"
              cy="75"
              fill="transparent"
              stroke="rgba(172, 20, 20, 0.5)"
              strokeWidth="10"
            ></circle>
            <circle
              r="65"
              cx="75"
              cy="75"
              stroke="#ac1414"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDashoffset={`${
                408.2 -
                (numberOfFascists / (numberOfFascists + numberOfLiberals)) *
                  408.2
              }px`}
              fill="transparent"
              strokeDasharray="408.2px"
            ></circle>
          </svg>
          <span
            style={{
              color: "#ac1414",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            {(
              (numberOfFascists / (numberOfFascists + numberOfLiberals)) *
              100
            ).toFixed(0)}
            %
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
