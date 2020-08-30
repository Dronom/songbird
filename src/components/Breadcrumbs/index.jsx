import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Category from './Category';

const Breadcrumbs = () => {
  const pagesPassed = useSelector((store) => store.pages.pagesPassed);
  const pages = useSelector((store) => store.pages.list);

  const { t } = useTranslation();

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__ul">
        {pages?.map((page, index) => (
          <Category page={page} index={index} pagesPassed={pagesPassed} t={t} key={page.name} />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
