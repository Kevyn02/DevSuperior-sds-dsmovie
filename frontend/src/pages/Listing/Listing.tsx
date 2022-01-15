import { useEffect, useState } from "react";

import { api } from "utils/api";

import { MovieCard } from "components/MovieCard";
import { Pagination } from "components/Pagination";
import { Movie, MoviePage } from "types/movie";

export function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  api.get<MoviePage>("/movies?size=12&page=0").then((response) => {
    console.log(response.data);
    setPageNumber(response.data.totalPages);
  });

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
