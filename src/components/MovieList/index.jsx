import React from 'react';

const MovieList = () => {
  return (
    <section className="movies-section movies-list">
      <ul className="movies-list__ul">
        <li className="movies-list__item">Воробей</li>
        <li className="movies-list__item">Грач</li>
        <li className="movies-list__item">Галка</li>
        <li className="movies-list__item">Певчий дрозд</li>
        <li className="movies-list__item error">Сорока</li>
        <li className="movies-list__item success">Сойка</li>
      </ul>
    </section>
  );
};

export default MovieList;
