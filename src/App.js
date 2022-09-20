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
import { useDispatch, useSelector } from 'react-redux';
import {logIn, setUser} from "./features/user/userSlice"

function App() {
  const logged = useSelector(state=>state.user.logged)
  const user = useSelector(state=>state.user.user)
  const [admin, setAdmin] = useState(false);
  const [role, setRole] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    user ? setRole(user.role) : setRole("")
  },[logged,user])
  useEffect(() => {
    role === 'admin'? setAdmin(true): setAdmin(false)
  }, [role])
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))))
      dispatch(logIn())
    }
  },[])


  return (
    <BrowserRouter>
    <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/cities' element={<CitiesPage />} />
          <Route path='/new-city' element={logged&&admin? <NewCity /> : <NotFound />} />
          <Route path='/edit-city' element={logged&&admin? <EditCity /> : <NotFound />} />
          <Route path='/edit-city/:id' element={logged&&admin? <EditCity />: <NotFound />} />
          <Route path='/signup' element={logged? <NotFound /> :<SignUp />} />
          <Route path='/signin' element={logged? <NotFound /> :<SignIn />} />
          <Route path='/city/:id' element={<City />} />
          <Route path='/mytineraries' element={logged? <MyTineraries /> :<NotFound />} />
          <Route path='/new-itinerary/:id' element={logged? <NewItinerary /> :<NotFound />} />
          <Route path='/new-itinerary' element={logged? <NewItinerary /> :<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
