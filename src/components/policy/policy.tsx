import "./policy.css";
import skull from "../../assets/icons8-skull-100.png";
import dove from "../../assets/icons8-dove-100.png";

export const LibPolicy = () => {
  return (
    <div className="policy libPolicy">
      <img src={dove} alt="dove" />
      <span>Liberals</span>
    </div>
  );
};

export const FasPolicy = () => {
  return (
    <div className="policy fasPolicy">
      <img src={skull} alt="skull" />
      <span>Fascists</span>
      <div className="tegobi" />
    </div>
  );
};
