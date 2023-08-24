import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Page/Main';
import StartPage from './Page/StartPage';
import Loading from './Page/Loading';
import End from './Page/End';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />}/>
          <Route path='/loading' element={<Loading />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/end' element={<End />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
