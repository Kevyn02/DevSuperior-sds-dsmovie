import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Movie } from "types/movie";
import { api } from "utils/api";

import "./styles.css";

export function Form() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie | undefined>();

  const [email, setEmail] = useState("");
  const [score, setScore] = useState(1);

  useEffect(() => {
    api.get<Movie>(`movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!validateEmail()) {
      window.alert("Por favor coloque um email valido!");
      return;
    }

    const data = {
      email,
      score,
      movieId,
    };
    api.put("/scores", data).then((response) => {
      if (response.status === 200) {
        window.alert("Pontuação enviada!");
        navigate("/");
      }
    });
  }

  function handleValidateEmail() {
    if (!validateEmail()) {
      window.alert("Por favor coloque um email valido!");
    }
  }

  function validateEmail() {
    return String(email)
      .trim()
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  if (!movie) {
    return null;
  }

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleValidateEmail}
              value={email}
            />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select
              className="form-control"
              id="score"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}
