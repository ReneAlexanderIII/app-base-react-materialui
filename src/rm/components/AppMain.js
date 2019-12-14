import React from 'react';

import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import MainRouter from './MainRouter';

export default function AppMain () {

  return (
    <>
      <MainHeader />
      <div>
        <MainRouter />
      </div>
      <MainFooter />
    </>
  )
}
