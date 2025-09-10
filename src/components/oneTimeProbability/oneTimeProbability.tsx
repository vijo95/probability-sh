import type { ProbabilityDashboardProps } from "../../App";
import "./oneTimeProbability.css";

export const OneTimeProbability = ({
  numberOfFascists,
  numberOfLiberals,
}: ProbabilityDashboardProps) => {
  return (
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
              (numberOfLiberals / (numberOfFascists + numberOfLiberals)) * 408.2
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
              (numberOfFascists / (numberOfFascists + numberOfLiberals)) * 408.2
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
  );
};
