import React, { useState } from "react";

import MovieList from "./components/MovieList";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="flex justify-center md:justify-between items-center p-7 bg-slate-800">
        <img
          src="https://bit.ly/3wXPyzv"
          alt="logo"
          className="w-10 h-10 hidden md:inline-block"
        />
        <div className="bg-white rounded-md px-3 space-x-3 py-2 flex ietms-center justify-evenly">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
          </svg>
          <div>
            <input
              className="flex-grow font-bold bg-transparent outline-none md:w-64 border-r-2"
              type="text"
              placeholder="Enter Movie Name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div
              className={`absolute ${
                !input && "hidden"
              } bg-white rounded-md text-gray-500 p-4 shadow-lg w-64 space-y-1`}
            >
              <p className="search-item"> 👉 Avengers</p>
              <p className="search-item"> 👉 Thor</p>
              <p className="search-item"> 👉 Captain America</p>
            </div>
          </div>
          <button className="text-blue-500 font-semibold">Search</button>
        </div>
        <h1 className="hidden md:inline-block font-bold text-xl text-white">
          Search and Discover Movies
        </h1>
      </div>
      <MovieList />
    </div>
  );
};

export default App;
