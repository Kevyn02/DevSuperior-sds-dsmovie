import { useEffect, useState } from "react";

import { api } from "utils/api";

import { MovieCard } from "components/MovieCard";
import { Pagination } from "components/Pagination";
import { MoviePage } from "types/movie";

export function Listing() {
  const [data, setData] = useState<MoviePage | undefined>();
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    api
      .get<MoviePage>(`/movies?size=12&page=${currentPage}&sort=title`)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      });
  }, [currentPage]);

  if (!data) {
    return null;
  }

  function handleSwitchPages(page: number) {
    if (page === -1 && currentPage === 0) {
      return;
    } else if (page === 1 && currentPage === data?.totalPages) {
      return;
    }
    setCurrentPage(currentPage + page);
  }

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={data.totalPages}
        handleSwitchPages={handleSwitchPages}
      />
      <div className="container">
        <div className="row">
          {data.content.map((movie) => {
            return (
              <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3">
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
