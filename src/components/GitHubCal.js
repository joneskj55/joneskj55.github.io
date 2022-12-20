import React, { Component } from "react";
import GitHubCalendar from "react-github-calendar";
import { DiGithubFull } from "react-icons/di";

export default class GitHubCal extends Component {
  render() {
    return (
      <div className="relative flex flex-col items-center group">
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
        <div className="absolute bottom-0 flex flex-col items-center hidden mb-4 lg:group-hover:flex">
          <span className="relative z-10 p-2 leading-none whitespace-no-wrap text-9xl">
            <DiGithubFull />
          </span>
        </div>
      </div>
    );
  }
}
