import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";

import './App.css';
import Login from './components/Login';
import Hotels from './components/Hotels';
import Hotel from './components/Hotel';
import ResponsiveAppBar from './components/AppBar';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import { db } from './firebase';

function App() {

  const [user, setUser] = useState(null);
  const [slug, setSlug] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function addBooking() {
      console.log('here');
      try {
        const docRef = await addDoc(collection(db, "bookings"), {
          name: "Aroma", address: "Gouraram", checkin: "Tue Jul 29 2023", checkout: "Mon Jul 31 2023", noofguests: 2, price: 199, email: "maneeshkurnapally24@gmail.com"
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    // addBooking();
    let user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
    else {
      setUser(null);
    }
    if (user) {
      if (window.location.pathname === "/") {
        navigate("/home");
      }
    } else {
      navigate("/");
    }
  }, [])
  const handleSlug = (slug) => {
    setSlug(slug)
  }

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (

    <div className='app'>
      {user && <ResponsiveAppBar user={user} logout={handleLogout} />}
      <div className='main-container'>
        <Routes>
          {user && <>
            <Route path='/home' element={<Hotels user={user} handleSlug={handleSlug} />} />
            <Route path='/hotelInfo/:id' element={<Hotel user={user} slug={slug} />} />
            <Route path='/profile' element={<Profile user={user} />} />
          </>
          }
          {!user && <>
            <Route path='/' element={<Login setUser={setUser} />} />
          </>}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;