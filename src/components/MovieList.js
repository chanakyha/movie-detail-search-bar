import React, { useEffect, useState } from "react";
import axios, { request } from "../axios";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response1 = await axios.get(request + "&page=1");
      setMovies(response1.data.results);
    })();
  }, []);

  return (
    <div className="w-screen mt-7">
      <h1 className="text-center font-bold text-4xl">
        Search Movies from Below
      </h1>
      <div className="flex flex-wrap items-center justify-center md:justify-between my-3 mx-10 space-x-1 space-y-5">
        {movies?.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
