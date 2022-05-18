import { useContext, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About';
import DetailPage from './pages/DetailPage';
import Context from './Context'
import Saved from './pages/Saved';


function App() {
  const ctx = useContext(Context)

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    ctx.setUsersData(data)
  }

  useEffect(() => {
    fetchUsers().catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:userId' element={<DetailPage />} />
        <Route path='/saved' element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
