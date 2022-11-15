import React, { Component } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default class ProjectTile extends Component {
  render() {
    return (
      <div className="hover:shadow-xl">
        <a
          href={this.props.obj.url}
          target={"_blank"}
          rel="noreferrer"
          className="hover:shadow-xl"
        >
          <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
            <div className="px-6 py-4 flex-1 group">
              <div className="font-bold text-xl mb-2">
                <span className="flex flex-1 justify-end lg:invisible group-hover:visible">
                  <BsBoxArrowUpRight />
                </span>
                {this.props.obj.title}
              </div>
              <p className="text-gray-400 text-base font-thin">
                {this.props.obj.description}
              </p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
