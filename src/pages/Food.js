import React from "react";
import axios from "axios";
import FoodElement from "../components/";
import { FoodColumn } from "../components/";
const token = "gArHoycVk4OMqAfR8G2MNfCIIXBHmfsu61mEldQCKyCrh93WXy";

const Food = () => {
  return (
    <div className="food__content">
      <FoodColumn title="DGIST" />
      <FoodColumn title="KAIST" />
      <FoodColumn title="UNIST" />
      <FoodColumn title="GIST" />
      <FoodColumn title="POSTECH" />
    </div>
  );
};

export default Food;
