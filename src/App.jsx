

import { Suspense } from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';


function App() {


  return (
    // eslint-disable-next-line react/jsx-no-undef
   
    <BrowserRouter>
     <Suspense>
      <AppRouter/>
     </Suspense>
    </BrowserRouter>

  )
}

export default App
