const React = require("react");
const { Link } = require("react-router-dom");

export default function Nav() {
  return (
    <header className="lg:sticky top-0 z-50">
      <nav className="mx-auto p-5 flex justify-evenly sm:justify-between py-4 px-6 shadow-2xl sm:items-baseline w-full mb-14 bg-gradient-to-tr from-[#082338] via-[#000000] to-[#082338]">
        <div>
          <Link
            to={"/"}
            className="text-base sm:text-2xl no-underline hover:text-gray-500"
          >
            <img
              src={require("../images/logo.webp")}
              alt="logo"
              height={150}
              width={150}
            />
          </Link>
        </div>
        <div className="flex flex-row">
          <Link
            to={"/resume"}
            className="pr-5 text-sm sm:text-lg hover:text-gray-500 invisible lg:visible"
          >
            Resume
          </Link>
          <Link
            to={"/projects"}
            className="pr-5 text-sm sm:text-lg hover:text-gray-500 invisible lg:visible"
          >
            Projects
          </Link>
          <Link
            to={"/visitors"}
            className="text-sm sm:text-lg hover:text-gray-500 invisible lg:visible"
          >
            Visitors
          </Link>
        </div>
      </nav>
    </header>
  );
}
