import React from "react";
import { decrease, increase } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
const DemoComponent = () => {
  const { count } = useSelector((state) => state.initChange);
  const numTest = useSelector((state) => state.initTest);
  const dispatch = useDispatch();
  const decreasement = () => {
    dispatch(decrease());
  };
  const increasement = () => {
    dispatch(increase());
  };
  return (
    <div className="container pt-3 text-center">
      <button className="btn btn-info me-3" onClick={decreasement}>
        {" "}
        -{" "}
      </button>
      {count}
      <button className="btn btn-info ms-3" onClick={increasement}>
        {" "}
        +{" "}
      </button>
      <h3>Other test: {numTest}</h3>
    </div>
  );
};

export default DemoComponent;
