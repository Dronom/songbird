import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = () => {
  const pagesPassed = useSelector((store) => store.pages.pagesPassed);
  const pages = useSelector((store) => store.pages.list);

  const { t } = useTranslation();

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__ul">
        {pages?.map((page, index) => (
          <li
            key={page.name}
            className={`breadcrumbs__step ${pagesPassed === index ? 'current' : null}`}
          >
            {t(page.name)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
