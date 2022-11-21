import React from "react";

export default function NotFound() {
  return (
    <main className="flex-grow m-2 md:m-4">
      <p className="text-2xl md:text-3xl font-light text-center">
        <span className="sm:flex flex-1 justify-start pl-4 hidden animate-bounce text-5xl">
          ☝🏾
        </span>
        Looks like you might be lost.
      </p>
      <div className="flex justify-center">
        <a href={"/"}>
          <img
            src={require("../images/404.png")}
            alt={"404"}
            height={500}
            width={500}
          />
        </a>
      </div>
      <p className="text-2xl md:text-3xl font-light mb-36 md:mb-10 text-center">
        The URL was not found.
      </p>
    </main>
  );
}
