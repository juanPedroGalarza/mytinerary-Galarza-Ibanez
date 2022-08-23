import './App.css';
import Hero from './pages/Hero';
import CitiesPage from "./pages/CitiesPage"
import NewCity from "./pages/NewCity"
import UnderConstruction from './pages/UnderConstruction';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/cities' element={<CitiesPage />} />
          <Route path='/new-city' element={<NewCity />} />
          <Route path='/*' element={<UnderConstruction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
