import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import routes from './Config/routes';


function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          { routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
            />
            ))  }
        </Routes>
    </BrowserRouter>
  )
}

export default App
