import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Page/Main';
import StartPage from './Page/StartPage';
import Loading from './Page/Loading';
import End from './Page/End';
import Contact from './Page/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />}/>
          <Route path='/loading' element={<Loading />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/end' element={<End />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
