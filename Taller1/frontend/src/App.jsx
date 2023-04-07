import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Create } from './aplication';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Create/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App
