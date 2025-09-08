import "./drawProbability.css";
import skull from "../../assets/icons8-skull-100.png";
import dove from "../../assets/icons8-dove-100.png";

interface CombinatorialNumber {
  n: number;
  k: number;
}

interface Policies {
  fas: number;
  lib: number;
  totalFas: number;
  totalLib: number;
}

const CN = ({ n, k }: CombinatorialNumber) => {
  if (k < 0 || k > n) return 0;
  k = Math.min(k, n - k); // take advantage of symmetry
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result = (result * (n - i + 1)) / i;
  }
  return Math.round(result); // ensure integer result
};

const probability = ({ fas, lib, totalFas, totalLib }: Policies) => {
  if (fas + lib < 3) return 0;
  if (totalFas + totalLib < 3) return 0;
  if (fas > totalFas) return 0;
  if (lib > totalLib) return 0;

  return Number(
    (
      ((CN({ n: totalFas, k: fas }) * CN({ n: totalLib, k: lib })) /
        CN({ n: totalFas + totalLib, k: 3 })) *
      100
    ).toFixed(1)
  );
};

export const DrawProbability = ({ fas, lib, totalFas, totalLib }: Policies) => {
  return (
    <div className="drawProbability">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {0 < lib ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25rem",
            }}
          >
            <span>{lib}</span>
            <img src={dove} />
          </div>
        ) : null}
        {0 < fas ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25rem",
            }}
          >
            <span>{fas}</span>
            <img src={skull} />
          </div>
        ) : null}
      </div>
      <span>{probability({ fas, lib, totalFas, totalLib })}%</span>
    </div>
  );
};
