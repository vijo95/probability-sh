import { useState } from "react";
import "./App.css";
import { PolicyDashboard } from "./components/policy/policyDashboard";
import { DrawProbabilityDashboard } from "./components/drawProbability/drawProbabilityDashboard";
import { OneTimeProbability } from "./components/oneTimeProbability/oneTimeProbability";

export interface PolicyDashboardProps {
  numberOfFascists: number;
  numberOfLiberals: number;
  setNumberOfFascists: React.Dispatch<React.SetStateAction<number>>;
  setNumberOfLiberals: React.Dispatch<React.SetStateAction<number>>;
}

export interface ProbabilityDashboardProps {
  numberOfFascists: number;
  numberOfLiberals: number;
}

function App() {
  const [numberOfFascists, setNumberOfFascists] = useState(11);
  const [numberOfLiberals, setNumberOfLiberals] = useState(6);

  return (
    <div className="root">
      {/* TITLE */}
      <h1 className="title">Trust Nobody</h1>
      {/* POLICY COUNT DASHBOARD */}
      <PolicyDashboard
        numberOfFascists={numberOfFascists}
        numberOfLiberals={numberOfLiberals}
        setNumberOfFascists={setNumberOfFascists}
        setNumberOfLiberals={setNumberOfLiberals}
      />
      {/* DRAW PROBABILITY DASHBOARD */}
      <DrawProbabilityDashboard
        numberOfFascists={numberOfFascists}
        numberOfLiberals={numberOfLiberals}
      />
      {/* CIRCULAR PROGRESS BARS */}
      <OneTimeProbability
        numberOfFascists={numberOfFascists}
        numberOfLiberals={numberOfLiberals}
      />
    </div>
  );
}

export default App;
