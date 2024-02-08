import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
<div className='main-content'>
    <div className="App">
      <Sidebar />
    </div>

<Routes>

  <Route 
    path='/' element={<Home />}
  />
    <Route 
      path='/dashboard' element={<Dashboard />}
    />

  
</Routes>
</div>
    </>

  );
}

export default App;
