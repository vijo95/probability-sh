import type { PolicyDashboardProps } from "../../App";
import { FasPolicy, LibPolicy } from "./policy";
import "./policy.css";

const PolicyCounterBtn = ({
  symbol,
  className,
  action,
}: {
  symbol: string;
  className: string;
  action: () => void;
}) => {
  return (
    <button className={`countBtn ${className}`} onClick={() => action()}>
      {symbol}
    </button>
  );
};

const PolicyCounter = ({
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
      <PolicyCounterBtn
        symbol="-"
        className={className}
        action={() => {
          if (0 < numberOfParty) {
            setNumerOfParty((prev) => prev - 1);
          }
        }}
      />
      <span>{numberOfParty}</span>
      <PolicyCounterBtn
        symbol="-"
        className={className}
        action={() => {
          if (numberOfParty < maxLimit) {
            setNumerOfParty((prev) => prev + 1);
          }
        }}
      />
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
