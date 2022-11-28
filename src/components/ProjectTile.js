import React, { Component } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default class ProjectTile extends Component {
  render() {
    return (
      <div>
        {/*mobile view*/}
        <div className="lg:hidden rounded-lg shadow-lg hover:shadow-2xl">
          <a href={this.props.obj.url} target={"_blank"} rel="noreferrer">
            <div className="rounded-lg overflow-hidden shadow-lg p-2 w-full h-full">
              <div className="px-6 py-4 flex-1 group">
                <div className="font-bold text-xl mb-2">
                  <span className="flex flex-1 justify-end lg:invisible group-hover:visible text-[#37a134] duration-300 lg:scale-0 group-hover:scale-100">
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
        {/*mobile end*/}

        <div className="hidden lg:grid lg:h-[25rem] pt-6 bg-transparent group perspective rounded-lg shadow-lg hover:shadow-2xl">
          <div className="relative preserve-3d group-hover:rotate w-full h-full duration-1000">
            <div className="absolute firefox backface-hidden w-full h-full">
              <a href={this.props.obj.url} target={"_blank"} rel="noreferrer">
                <div className="rounded-lg overflow-hidden shadow-lg p-2 w-full h-full">
                  <div className="px-6 py-4 flex-1 group">
                    <div className="font-bold text-xl mb-2">
                      {this.props.obj.title}
                    </div>
                    <p className="text-gray-400 text-base font-thin">
                      {this.props.obj.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="absolute rotate backface-hidden w-full h-full overflow-hidden">
              <a href={this.props.obj.url} target={"_blank"} rel="noreferrer">
                <div className="px-6 py-4 flex-1 group">
                  <div className="font-bold text-xl mb-2">
                    <span className="flex flex-1 justify-end lg:invisible group-hover:visible text-[#37a134] delay-500 duration-1000 lg:scale-0 group-hover:scale-100">
                      <BsBoxArrowUpRight className="hover:text-[#39d353]" />
                    </span>
                    {this.props.obj.title}
                  </div>
                  <p className="text-gray-400 mb-2">Tech used:</p>
                  <ul className="text-gray-400 text-base font-thin mb-2">
                    {this.props.obj.tech?.map((tech, i) => {
                      return <li key={i}>{tech}</li>;
                    })}
                  </ul>
                  <div className="text-gray-400 mb-2">
                    Deployed on:{" "}
                    <span className="text-gray-400 text-base font-thin mb-2">
                      {this.props.obj.deployed?.map((deployed, i) => {
                        if (i !== this.props.obj.deployed.length - 1) {
                          return <span key={i}>{deployed}, </span>;
                        }
                        return <span key={i}>{deployed}</span>;
                      })}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">
                    Year built:{" "}
                    <span className="text-gray-400 text-base font-thin mb-2">
                      {this.props.obj.year}
                    </span>
                  </p>
                </div>
              </a>

              <div className="text-right sm:px-6 delay-500 duration-1000 lg:scale-0 group-hover:scale-100">
                <a
                  href={this.props.obj.repo}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {this.props.obj.private ? (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#006d32] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#0e4429] focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
                      disabled
                    >
                      Private Repo
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#006d32] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#26a641] focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
                    >
                      Repo
                    </button>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
