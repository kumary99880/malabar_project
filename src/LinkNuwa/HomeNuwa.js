import React from 'react';
import Header from '../Component/Header';
import Footer1 from '../Component/Footer1';
import Dropdown from '../LinkNuwa/DropDown';  // Correcting 'Dropdown' to 'Dropdown' assuming this is the correct component name
import CardSame from '../LinkNuwa/CardSame';
import Promise from '../LinkNuwa/Promise';
import PromiseRight from '../LinkNuwa/PromiseRight';
import FirstImage from '../LinkNuwa/FirstImage';

function HomeNuwa() {
  return (
    <>
      <Header />
       <FirstImage/>
       <Dropdown /> 
       <CardSame />
       <Promise/>
      <CardSame />
       <PromiseRight/>
      <CardSame />
      <CardSame />
      <Footer1 />
    </>
  );
}

export default HomeNuwa;
