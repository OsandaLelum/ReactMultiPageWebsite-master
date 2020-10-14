import React from "react";
import "./home.css";
import { Grid, Cell } from "react-mdl";
import laptop from "../images/laptop.png";
import arrow from "../images/arrow-right.png";
import { Panel as ColorPicker } from "rc-color-picker";
import { GradientPicker } from "react-linear-gradient-picker";

/*import arrowright from "../images/arrow-right.png";*/

/*import laptop from "../images/laptop.png";*/

export default function Home() {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Grid className="content-grid">
        <Cell col={6}>
          <h1>Don't look anywhere This is the best place on web</h1>
          <h2>
            living in todays metropoliton world of cellular phones , mobile
            computers and other high-tect gadgets isn't just hectic but very
          </h2>
          <img className="arrow__Image" src={arrow} alt="" />
          <button>
            <img src={arrow} />
          </button>
        </Cell>
        <Cell col={6}>
          <img className="laptop__Image" src={laptop} alt="" />
        </Cell>
      </Grid>
    </div>
  );
}
