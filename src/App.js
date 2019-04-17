import React, { Component } from "react";
import "./App.css";
import LeftNav from "./LeftNav";
import Links from "./Links";
import PeritusAssistIncidentChart from "./PeritusAssistIncidentChart";

const mainStyle = {
  display: "inline-block",
  verticalAlign: "top",
  padding: 15
};

class App extends Component {
  render() {
    return (
      <div>
        <span>
          <LeftNav />
        </span>
        <div style={mainStyle}>
          <Links />
          <h3>Acme Corp</h3>
          <PeritusAssistIncidentChart />
        </div>
      </div>
    );
  }
}

export default App;
