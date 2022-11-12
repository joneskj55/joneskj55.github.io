import React, { Component } from "react";
import GitHubCalendar from "react-github-calendar";

export default class GitHubCal extends Component {
  render() {
    return (
      <GitHubCalendar
        username="joneskj55"
        theme={{
          level0: "#161b22",
          level1: "#0e4429",
          level2: "#006d32",
          level3: "#26a641",
          level4: "#39d353",
        }}
        hideTotalCount={false}
        hideColorLegend={true}
        hideMonthLabels={false}
        showWeekdayLabels={false}
      />
    );
  }
}
