import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants.js';
import Header from '../header/header.jsx';

const MyList = () => (
  <div className="user-page">
    <Header
      renderTitle={() => (
        <h1 className="page-title user-page__title">My list</h1>
      )}
    />

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        {/* More Articles */}
        <article className="small-movie-card catalog__movies-card">
          <div className="small-movie-card__image">
            <img
              src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
              alt="Fantastic Beasts: The Crimes of Grindelwald"
              width="280"
              height="175"
            />
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">
              Fantastic Beasts: The Crimes of Grindelwald
            </a>
          </h3>
        </article>
      </div>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <Link to={AppRoute.MAIN} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2020 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default MyList;
