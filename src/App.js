import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import CitiesPage from "./pages/CitiesPage"
import NewCity from "./pages/NewCity"
import EditCity from './pages/EditCity';
import NotFound from './pages/NotFound';
import City from './pages/City';
import WebsiteLayout from './layouts/WebsiteLayout';
import MyTineraries from './pages/MyTineraries';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NewItinerary from './pages/NewItinerary';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


function App() {

  const [logged, setLogged] = useState(false);
  const [admin, setAdmin]= useState(false);
  //let users = useSelector((state)=>state.usersAPI.userSignIn)
  
  useEffect(() =>{
    
      JSON.parse(localStorage.getItem('user'))?.role&& setLogged(true)
      JSON.parse(localStorage.getItem('user'))?.role==='admin' && setAdmin(true)
  }, [])


  return (
    <BrowserRouter>
    <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/cities' element={<CitiesPage />} />
          <Route path='/new-city' element={logged&&admin? <NewCity /> : <Hero />} />
          <Route path='/edit-city' element={logged&&admin? <EditCity /> : <Hero />} />
          <Route path='/edit-city/:id' element={logged&&admin? <EditCity />: <NotFound />} />
          <Route path='/signup' element={logged? <Hero /> :<SignUp />} />
          <Route path='/signin' element={logged? <Hero /> :<SignIn />} />
          <Route path='/city/:id' element={<City />} />
          <Route path='/mytineraries' element={logged? <MyTineraries /> :<NotFound />} />
          <Route path='/new-itinerary' element={logged? <NewItinerary /> :<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
