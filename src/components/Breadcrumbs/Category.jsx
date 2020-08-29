import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ page, pagesPassed, index, t }) => (
  <li className={`breadcrumbs__step ${pagesPassed === index && 'current'}`}>{t(page.name)}</li>
);

Category.propTypes = {
  page: PropTypes.shape({ name: PropTypes.string }).isRequired,
  index: PropTypes.number.isRequired,
  pagesPassed: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
};

export default Category;
