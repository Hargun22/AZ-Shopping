import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state.data);
  return <div>Successful</div>;
};

export default Success;
