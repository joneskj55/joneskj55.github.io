import React, { Component } from "react";
import axios from "axios";
import VisitorTableRow from "./VisitorTableRow";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export default class SiteVisitor extends Component {
  constructor(props) {
    super(props);

    this.animationInstance = null;

    this.createVisitorName = this.createVisitorName.bind(this);
    this.createVisitorEmail = this.createVisitorEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      date: new Date(),
      visitors: [],
    };
  }

  createVisitorName(e) {
    this.setState({ name: e.target.value });
  }

  createVisitorEmail(e) {
    this.setState({ email: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const visitorObject = {
      name: this.state.name,
      email: this.state.email,
      date: this.state.date,
    };

    axios
      .post(
        "https://portfolio-backend-alpha-rouge.vercel.app/visitors/create-visitor",
        visitorObject
      )
      .then(() =>
        axios
          .get("https://portfolio-backend-alpha-rouge.vercel.app/visitors")
          .then((res) => {
            this.setState({
              visitors: res.data,
            });
          })
          .then(() => {
            this.fire();
          })
      );

    this.setState({
      name: "",
      email: "",
      date: "",
    });
  }

  componentDidMount() {
    axios
      .get("https://portfolio-backend-alpha-rouge.vercel.app/visitors")
      .then((res) => {
        this.setState({
          visitors: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  visitorData() {
    return this.state.visitors.map((res, i) => {
      return <VisitorTableRow obj={res} key={i} />;
    });
  }

  makeShot = (particleRatio, opts) => {
    this.animationInstance &&
      this.animationInstance({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  };

  fire = () => {
    this.makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    this.makeShot(0.2, {
      spread: 60,
    });

    this.makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    this.makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  getInstance = (instance) => {
    this.animationInstance = instance;
  };

  render() {
    return (
      <main className="flex-grow m-2 md:m-4 lg:pb-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Visitors</h1>
        <br />
        <div className="flex flex-col md:flex-row justify-center">
          <ReactCanvasConfetti
            refConfetti={this.getInstance}
            style={canvasStyles}
          />
        </div>
        <p className="text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
          Add your info to the table.
        </p>
        <div className="flex flex-1 justify-evenly">
          <div className="container mx-auto">
            <div className="sm:flex justify-center">
              <div className="mt-8 sm:mt-0 flex flex-col">
                <form
                  onSubmit={this.onSubmit}
                  className="flex flex-col h-full w-full sm:pb-14"
                >
                  <div className="overflow-hidden shadow-2xl rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="name" className="block font-medium">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Zumbi"
                            value={this.state.name}
                            onChange={this.createVisitorName}
                            required
                            className="mt-1 block w-full rounded-md border-main-gray shadow-sm focus:border-resume-green focus:ring-resume-green sm:text-sm text-gray-900 bg-main-gray"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block font-medium"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="email-address"
                            placeholder="zumbi@palmares.com"
                            value={this.state.email}
                            onChange={this.createVisitorEmail}
                            required
                            className="mt-1 block w-full rounded-md border-main-gray shadow-sm focus:border-resume-green focus:ring-resume-green sm:text-sm text-gray-900 bg-main-gray"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-button py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-btn-hover focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
                      >
                        Add Name
                      </button>
                    </div>
                  </div>
                </form>

                <div className="flex flex-col h-full w-full text-xs sm:text-base">
                  <div className="border border-transparent mt-8 sm:mt-0 sm:w-full flex flex-col">
                    <table className="overflow-hidden shadow-2xl rounded-md w-full">
                      <thead>
                        <tr className="bg-main-gray">
                          <th className="p-1 sm:p-4 text-center text-gray-900">
                            Name
                          </th>
                          <th className="p-1 sm:p-4 text-center text-gray-900">
                            Email
                          </th>
                          <th className="p-1 sm:p-4 text-center text-gray-900">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {this.visitorData()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
