import type { PolicyDashboardProps } from "../../App";
import { FasPolicy, LibPolicy } from "./policy";
import "./policy.css";

export const PolicyCounter = ({
  numberOfParty,
  setNumerOfParty,
  maxLimit,
  className,
}: {
  numberOfParty: number;
  setNumerOfParty: React.Dispatch<React.SetStateAction<number>>;
  maxLimit: number;
  className: "countFasBtn" | "countLibBtn";
}) => {
  return (
    <div className="policyCounter">
      <button
        className={`countBtn ${className}`}
        onClick={() => {
          if (0 < numberOfParty) {
            setNumerOfParty((prev) => prev - 1);
          }
        }}
      >
        -
      </button>
      <span>{numberOfParty}</span>
      <button
        className={`countBtn ${className}`}
        onClick={() => {
          if (numberOfParty < maxLimit) {
            setNumerOfParty((prev) => prev + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export const PolicyDashboard = ({
  numberOfFascists,
  numberOfLiberals,
  setNumberOfFascists,
  setNumberOfLiberals,
}: PolicyDashboardProps) => {
  return (
    <div className="count">
      <div className="policyCount">
        <LibPolicy />
        <PolicyCounter
          numberOfParty={numberOfLiberals}
          setNumerOfParty={setNumberOfLiberals}
          maxLimit={6}
          className="countLibBtn"
        />
      </div>
      <div className="policyCount">
        <FasPolicy />
        <PolicyCounter
          numberOfParty={numberOfFascists}
          setNumerOfParty={setNumberOfFascists}
          maxLimit={11}
          className="countFasBtn"
        />
      </div>
    </div>
  );
};
