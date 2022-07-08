import React, { useEffect, useState } from 'react';
import { LandingPageContainer, Content } from './App.styled';
import { Header } from './components';
import data from './utils/fe_data.json';


function App() {
  return (
    <LandingPageContainer>
      <Header method={data.method} path={data.path} api={data.api}/>
    </LandingPageContainer>
  );
}

export default App;
