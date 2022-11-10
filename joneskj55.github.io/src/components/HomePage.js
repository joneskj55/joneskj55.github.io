import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <main className="flex-grow mb-20 m-2 md:m-16">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Hello 👋🏾</h1>
        <br />
        <p className="text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
          Welcome to my site!
        </p>
      </main>
    );
  }
}
