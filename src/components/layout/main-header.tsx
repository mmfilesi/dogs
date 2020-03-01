import React from 'react';

export const MainHeader: React.FC = ()  => {
  return (
    <header className="main-header" role="banner" data-qa="mainHeader">
      <h1 className="main-header__title">Dogs!</h1>
      <small className="main-header__aside">a canine application</small>
    </header>
  );
};