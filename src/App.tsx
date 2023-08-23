import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Page/Main';
import StartPage from './Page/StartPage';
import Loading from './Page/Loading';
import Test from './Components/Test';
import Test2 from './Components/Test2';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />}/>
          <Route path='/loading' element={<Loading />}/>
          <Route path='/main' element={<Main />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
