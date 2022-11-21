import React from "react";

export default function NotFound() {
  return (
    <main className="flex-grow m-2 md:m-4">
      <p className="text-2xl md:text-3xl font-light mb-5 md:mb-10 text-center">
        Looks like you might be lost.
      </p>
      <div className="flex justify-center">
        <a href={"/"}>
          <img src={require("../images/404.png")} alt={"404"} />
        </a>
      </div>
      <p className="text-2xl md:text-3xl font-light mb-20 md:mb-10 text-center">
        The URL does not exist.
      </p>
    </main>
  );
}
