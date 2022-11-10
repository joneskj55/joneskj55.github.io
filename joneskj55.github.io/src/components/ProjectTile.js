import React, { Component } from "react";

export default class ProjectTile extends Component {
  render() {
    return (
      <ul className="hover:shadow-xl">
        <a href={this.props.obj.url} className="hover:shadow-xl">
          <div className="rounded overflow-hidden shadow-lg p-2 w-full h-full">
            <div className="px-6 py-4 flex-1">
              <div className="font-bold text-xl mb-2">
                {this.props.obj.title}
              </div>
              <p className="text-gray-600 text-base">
                {this.props.obj.description}
              </p>
            </div>
          </div>
        </a>
      </ul>
    );
  }
}
