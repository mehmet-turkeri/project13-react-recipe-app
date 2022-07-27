import React from "react";
import { NotFoundImage } from "./style";
import NotFoundImg from "../../assets/notFound.png";

const NotFound = () => {
  return (
    <div>
      <NotFoundImage src={NotFoundImg} />
    </div>
  );
};

export default NotFound;
