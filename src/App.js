import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Login from './components/Login';
import Hotels from './components/Hotels';
import Hotel from './components/Hotel';
import ResponsiveAppBar from './components/AppBar';


function App() {

  const [user, setUser] = useState(null);
  const [slug, setSlug] = useState("");

  const handleSlug = (slug) => {
    setSlug(slug)
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (

    <div className='app'>
      {user && <ResponsiveAppBar user={user} logout={handleLogout} />}
      <Routes>
        <Route path='/' element={<Login setUser={setUser} />} />
        <Route path='/home' element={<Hotels user={user} handleSlug={handleSlug} />} />
        <Route path='/hotelInfo/:id' element={<Hotel user={user} slug={slug} />} />
        <Route path='/profile' element={<Hotel user={user} slug={slug} />} />
      </Routes>
    </div>
  );
}

export default App;
