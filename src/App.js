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
import {logIn, setCredentials} from "./features/user/userSlice"
import { useVerifyTokenMutation } from './features/actions/usersAPI';
import Alert from './components/Alert';
import NewAdmin from './pages/NewAdmin';


function App() {
  const logged = useSelector(state=>state.user.logged)
  const user = useSelector(state=>state.user.user)
  const [admin, setAdmin] = useState(false);
  const [role, setRole] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [verifyToken,{data:resToken, error:errToken, isSuccess}] = useVerifyTokenMutation()
  const dispatch = useDispatch()
  useEffect(() => {
    let localToken = localStorage.getItem("token")
    localToken && verifyToken(localToken)
  },[])
  useEffect(() => {
    if (resToken?.success) {
      dispatch(setCredentials(resToken.response))
      dispatch(logIn())
      setShowAlert(true)
    } else if(errToken){
      localStorage.removeItem("token")
    }
  },[isSuccess,errToken])
  useEffect(() => {
    user ? setRole(user.role) : setRole("")
  },[logged,user])
  useEffect(() => {
    role === 'admin'? setAdmin(true): setAdmin(false)
  }, [role])
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    },5000)
  },[isSuccess])
  return (
    <BrowserRouter>
    <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/cities' element={<CitiesPage />} />
          <Route path='/new-city' element={logged&&admin? <NewCity /> : <NotFound />} />
          <Route path='/edit-city' element={logged&&admin? <EditCity /> : <NotFound />} />
          <Route path='/edit-city/:id' element={logged&&admin? <EditCity />: <NotFound />} />
          <Route path='/new-admin' element={logged&&admin? <NewAdmin/>: <NotFound />} />
          <Route path='/signup' element={logged? <NotFound /> :<SignUp />} />
          <Route path='/signin' element={logged? <NotFound /> :<SignIn />} />
          <Route path='/city/:id' element={<City />} />
          <Route path='/mytineraries' element={logged? <MyTineraries /> :<NotFound />} />
          <Route path='/new-itinerary/:id' element={logged? <NewItinerary /> :<NotFound />} />
          <Route path='/new-itinerary' element={logged? <NewItinerary /> :<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        {showAlert ?
          <Alert res={resToken} stop={() => setShowAlert(false)} />:null
      }
    </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
