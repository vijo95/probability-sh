import type { ProbabilityDashboardProps } from "../../App";
import { DrawProbability } from "./drawProbability";
import "./drawProbability.css";

export const DrawProbabilityDashboard = ({
  numberOfFascists,
  numberOfLiberals,
}: ProbabilityDashboardProps) => {
  return (
    <div className="drawProbabilityContainer">
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
  );
};
