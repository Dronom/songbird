import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';

import Playback from '../Playback';
import genres from '../../helpers/movieAPI/genres';
import { startDescription, pauseDescription, stopDescription } from '../../redux/actions';

const FullDescription = ({ description, t }) => {
  const descriptionPlayback = useSelector((store) => store.playback.description, shallowEqual);

  const dispatch = useDispatch();

  return (
    <div className="movie-selected">
      <img
        src={`${process.env.MOVIE_POSTER_LINK}${description.poster_path}`}
        alt="movie poster"
        className="movies-description__poster"
      />
      <div className="movie-information">
        <h4 className="movie-title">{description.title || description.name}</h4>
        <p className="movie-title-original" title="original title">
          {description.original_title || description.original_name}
        </p>
        <ul className="genre-ul">
          {description.genre_ids.map((id) => (
            <li key={id} className="genre">
              {t(genres.get(id))}
            </li>
          ))}
        </ul>
        <p className="movie-rating">{description.vote_average}/10</p>
        <Playback
          text={description.overview}
          stopButton
          playback={descriptionPlayback}
          onClick={() => {
            dispatch(startDescription(description.overview));
          }}
          pauseClick={() => {
            dispatch(pauseDescription());
          }}
          stopClick={() => {
            dispatch(stopDescription());
          }}
        />
      </div>
      <p className="movie-overview">{description.overview}</p>
    </div>
  );
};

FullDescription.defaultProps = {
  description: {},
};

FullDescription.propTypes = {
  t: PropTypes.func.isRequired,
  description: PropTypes.shape({
    name: PropTypes.string,
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    original_name: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
  }),
};

export default FullDescription;
