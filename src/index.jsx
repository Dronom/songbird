import React from 'react';
import { render } from 'react-dom';

import './styles/index.scss';

import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import MovieSection from './components/MovieSection';

const App = () => (
  <div className="container">
    <Header />
    <Breadcrumbs />
    <MovieSection />
  </div>
);

render(<App />, document.getElementById('app'));
